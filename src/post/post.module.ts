import { Module } from "@nestjs/common";
import { PostsController } from "./post.controller";
import { PostsService } from "./post.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostEntity } from "./post.entity";
import { PostsResolver } from "./post.resolver";

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  controllers: [PostsController],
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}
