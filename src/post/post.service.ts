import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { PostEntity } from "./post.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PostsService extends TypeOrmCrudService<PostEntity> {
  constructor(@InjectRepository(PostEntity) repo) {
    super(repo);
  }
}
