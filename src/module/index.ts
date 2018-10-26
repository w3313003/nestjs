import { Module } from "@nestjs/common";
import { EmployeeModule } from "./employee/employee.module";
import SubModule from "./sub/sub.module";
import { UserModule } from "./user/user.module";
import { UploadModule } from "./upload/upload.module";
import { DataModule } from "./data/data.module";
import { StudentModule } from "./student/student.module";

@Module({
    imports: [EmployeeModule, SubModule, UserModule, UploadModule, DataModule, StudentModule]
})
export class MainModule {}