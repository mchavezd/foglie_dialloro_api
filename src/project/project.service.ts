import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { ProjectEntity } from "./project.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class ProjectService extends TypeOrmCrudService<ProjectEntity> {
  constructor(@InjectRepository(ProjectEntity) repo) {
    super(repo);
  }
}
