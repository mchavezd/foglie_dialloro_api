import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { CategoryEntity } from "./category.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoryService extends TypeOrmCrudService<CategoryEntity> {
  constructor(@InjectRepository(CategoryEntity) repo) {
    super(repo);
  }
}
