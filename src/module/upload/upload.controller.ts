import { Controller, Post, UseInterceptors, FileInterceptor, UploadedFile } from "@nestjs/common";
import { UploadService } from "./upload.service";

@Controller("upload")
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}
    @Post('image')
    @UseInterceptors(FileInterceptor("file"))
    async Image(@UploadedFile() file): Promise<string> {
        const data = await this.uploadService.save(file);
        return data;
    }
}