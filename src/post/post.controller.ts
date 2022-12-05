import { Controller, UseGuards } from "@nestjs/common";
import { PostEntity } from "./post.entity";
import { AuthGuard } from "@nestjs/passport";
import { PostsService } from "./post.service";
import { Crud } from "@nestjsx/crud";

@Crud({
  model: {
    type: PostEntity,
  },
  query: {
    join: {
      image: {
        eager: true,
      },
    },
  },
})
@UseGuards(AuthGuard("jwt"))
@Controller("v1/posts")
export class PostsController {
  constructor(public service: PostsService) {}
}
