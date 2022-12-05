import { Module } from "@nestjs/common";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";
import { ProjectResolver } from "./project.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectEntity } from "./project.entity";
import { CategoryEntity } from "../category/category.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity, CategoryEntity])],
  controllers: [ProjectController],
  providers: [ProjectService, ProjectResolver],
})
export class ProjectModule {}
