import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { SliderEntity } from "./slider.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class SliderService extends TypeOrmCrudService<SliderEntity> {
  constructor(@InjectRepository(SliderEntity) repo) {
    super(repo);
  }
}
