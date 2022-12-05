import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { FileEntity } from "./file.entity";

@Injectable()
export class FileService extends TypeOrmCrudService<FileEntity> {
  constructor(@InjectRepository(FileEntity) repo) {
    super(repo);
  }
}
