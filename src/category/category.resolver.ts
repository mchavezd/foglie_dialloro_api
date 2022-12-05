import { Resolver, Query } from "@nestjs/graphql";
import { CategoryService } from "./category.service";
import { CategoryEntity } from "./category.entity";

@Resolver(() => CategoryEntity)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [CategoryEntity])
  async categories() {
    return this.categoryService.find({
      relations: ["children"],
      where: {
        parent: null,
      },
      order: { id: "ASC" },
    });
  }
}
