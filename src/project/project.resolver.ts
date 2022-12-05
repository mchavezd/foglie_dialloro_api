import { Resolver, Query, Args } from "@nestjs/graphql";
import { ProjectService } from "./project.service";
import { ProjectEntity } from "./project.entity";
import { FindManyOptions, Repository } from "typeorm";
import { ObjectType } from "@nestjs/graphql";
import { PaginatedResponse } from "../core/basic_entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoryEntity } from "../category/category.entity";

@ObjectType()
class PaginatedProjectResponse extends PaginatedResponse(ProjectEntity) {}

@Resolver(() => ProjectEntity)
export class ProjectResolver {
  constructor(
    private readonly projectService: ProjectService,
    @InjectRepository(CategoryEntity)
    readonly categoryRepo: Repository<CategoryEntity>,
  ) {}

  @Query(() => ProjectEntity)
  async project(@Args("id") id: number) {
    return this.projectService.findOne(id, {
      relations: ["category", "image"],
    });
  }

  @Query(() => PaginatedProjectResponse)
  async projects(
    @Args("skip") skip: number,
    @Args("take") take: number,
    @Args("categoryId") categoryId?: string,
  ) {
    let options: FindManyOptions<ProjectEntity> = {
      relations: ["category", "image"],
      order: { id: "DESC" },
      skip,
      take,
    };

    if (categoryId) {
      options = {
        ...options,
        where: { category: { id: categoryId } },
      };

      const category = await this.categoryRepo.findOne(categoryId, {
        relations: ["children"],
      });

      if (category?.children.length) {
        options = {
          ...options,
          where: [
            ...category.children.map((subCat) => ({
              category: { id: subCat.id },
            })),
            { category: { id: categoryId } },
          ],
        };
      }
    }

    const projects = await this.projectService.find(options);
    const count = await this.projectService.count();
    const data = this.projectService.createPageInfo(
      projects,
      count,
      take,
      skip,
    );
    return { ...data, pageCount: data.pageCount ?? 0 };
  }
}
