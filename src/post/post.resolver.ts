import { Resolver, Query, Args } from "@nestjs/graphql";
import { PostsService } from "./post.service";
import { PostEntity } from "./post.entity";
import { LessThan, MoreThan, Not, FindManyOptions } from "typeorm";
import { ObjectType } from "@nestjs/graphql";
import { PaginatedResponse } from "src/core/basic_entity";

@ObjectType()
class PaginatedPostResponse extends PaginatedResponse(PostEntity) {}

@Resolver(() => PostEntity)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => PostEntity)
  async post(@Args("id") id: number) {
    return this.postsService.findOne(id, { relations: ["image"] });
  }

  @Query(() => PaginatedPostResponse)
  async posts(@Args("skip") skip: number, @Args("take") take: number) {
    const options: FindManyOptions<PostEntity> = {
      relations: ["image"],
      order: { id: "DESC" },
      skip,
      take,
    };

    const posts = await this.postsService.find(options);
    const count = await this.postsService.count();
    const data = this.postsService.createPageInfo(posts, count, take, skip);
    return { ...data, pageCount: data.pageCount ?? 0 };
  }

  @Query(() => [PostEntity])
  async relatedPosts(@Args("id") id: number) {
    let prev = await this.postsService.findOne({
      where: { id: LessThan(id) },
    });
    let next = await this.postsService.findOne({
      where: { id: MoreThan(id) },
    });

    if (!prev) {
      const { first, last } = await this.getFirstAndLastPosts(id);

      prev = first;

      if (prev.id === next?.id) {
        prev = last;
      }
    }

    if (!next) {
      const { first, last } = await this.getFirstAndLastPosts(id);

      next = last;

      if (prev.id === next?.id) {
        next = first;
      }
    }

    return [prev, next];
  }

  async getFirstAndLastPosts(id: number) {
    const posts = await this.postsService.find({
      order: { id: "ASC" },
      where: { id: Not(id) },
    });
    const first = posts[0];
    const last = posts[posts.length - 1];
    return { first, last };
  }
}
