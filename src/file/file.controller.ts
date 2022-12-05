import {
  Controller,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
} from "@nestjs/common";
import { FileEntity } from "./file.entity";
import { Crud, Override } from "@nestjsx/crud";
import { AuthGuard } from "@nestjs/passport";
import { FileService } from "./file.service";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FilesInterceptor } from "@nestjs/platform-express";

import getImageSize = require("probe-image-size");

@Crud({
  model: {
    type: FileEntity,
  },
})
@UseGuards(AuthGuard("jwt"))
@Controller("v1/files")
export class FileController {
  constructor(
    public service: FileService,
    @InjectRepository(FileEntity)
    readonly fileRepo: Repository<FileEntity>,
  ) {}

  @Override()
  @UseInterceptors(FilesInterceptor("files"))
  async createOne(@UploadedFiles() files: any[]) {
    for (const file of files) {
      const dimensions = await getImageSize(file.location);
      this.fileRepo.save({
        url: file.location,
        width: dimensions.width,
        height: dimensions.height,
      });
    }

    return true;
  }
}
