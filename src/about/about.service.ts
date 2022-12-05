import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { AboutEntity } from "./about.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AboutService extends TypeOrmCrudService<AboutEntity> {
  constructor(@InjectRepository(AboutEntity) repo) {
    super(repo);
  }
}
