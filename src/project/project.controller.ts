import { Controller, UseGuards } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { ProjectEntity } from "./project.entity";
import { AuthGuard } from "@nestjs/passport";
import { ProjectService } from "./project.service";

@Crud({
  model: {
    type: ProjectEntity,
  },
  query: {
    join: {
      image: {
        eager: true,
      },
      category: {
        eager: true,
      },
    },
  },
})
@UseGuards(AuthGuard("jwt"))
@Controller("v1/projects")
export class ProjectController {
  constructor(public service: ProjectService) {}
}
