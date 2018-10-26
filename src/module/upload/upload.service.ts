import { Injectable, PipeTransform } from "@nestjs/common";
import * as fs from "fs";
import * as stream from "stream";
import * as path from "path";
import { assertPath, assertHost } from "../../common/path";

interface MulterFile  {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    buffer: Buffer;
    size: number;
}

@Injectable()
export class UploadService {
    async save(file: MulterFile): Promise<any> {
        const { PassThrough } = stream;
        const { mimetype, originalname } = file;
        const type = mimetype.match(/\w*(?=\/)/)[0];
        try {
            fs.accessSync(path.join(assertPath, type));
        } catch (e) {
            fs.mkdirSync(path.join(assertPath, type));
        }
        return new Promise((resolve) => {
            console.log(file);
            const date = new Date(),
                year = date.getFullYear(),
                month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`,
                day = date.getDate() >= 10 ? date.getDate() : `0${date.getDate()}`;
            let ext;
            try {
                ext = originalname.match((/\.(\w+)(?!\S)/))[1];
            } catch {
                // 无后缀
                ext = '';
            }
            const filename = `${year}${month}${day}` + '_' + Math.random().toString(16).slice(2),
                dirName = `${year}-${month}`,
                dirPath = path.join(assertPath, `${type}/${dirName}`),
                filePath = `${type}/${dirName}/${filename}.${ext}`;
            try {
                fs.accessSync(dirPath);
            } catch (e) {
                fs.mkdirSync(dirPath);
            }
            // Transform流
            const transStream = new PassThrough();
            // buffer to ReadableStream
            transStream.end(file.buffer);
            const wStream: fs.WriteStream = fs.createWriteStream(path.join(assertPath, filePath));
            // 写入
            transStream.pipe(wStream).on("close", () => {
                resolve({
                    message: "success",
                    path: filePath,
                    assertHost
                });
            });
        });
    }
}