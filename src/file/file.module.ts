import { Module } from "@nestjs/common";
import { FileController } from "./file.controller";
import { FileService } from "./file.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FileEntity } from "./file.entity";
import { MulterModule } from "@nestjs/platform-express";
import { multerOptions } from "../globals";

@Module({
  imports: [
    TypeOrmModule.forFeature([FileEntity]),
    MulterModule.register(multerOptions),
  ],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
