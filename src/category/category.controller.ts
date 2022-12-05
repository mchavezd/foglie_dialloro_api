import { Controller, UseGuards } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { AuthGuard } from "@nestjs/passport";
import { CategoryEntity } from "./category.entity";
import { CategoryService } from "./category.service";

@Crud({
  model: {
    type: CategoryEntity,
  },
  query: {
    join: {
      parent: {
        eager: true,
      },
      children: {
        eager: true,
      },
    },
  },
})
@UseGuards(AuthGuard("jwt"))
@Controller("v1/categories")
export class CategoryController {
  constructor(public service: CategoryService) {}
}
