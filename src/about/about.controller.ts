import { Controller, UseGuards } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { AuthGuard } from "@nestjs/passport";
import { AboutEntity } from "./about.entity";
import { AboutService } from "./about.service";

@Crud({
  model: {
    type: AboutEntity,
  },
  query: {
    join: {
      image: {
        eager: true,
      },
      image1: {
        eager: true,
      },
      image2: {
        eager: true,
      },
      image3: {
        eager: true,
      },
      image4: {
        eager: true,
      },
    },
  },
})
@UseGuards(AuthGuard("jwt"))
@Controller("v1/about")
export class AboutController {
  constructor(public service: AboutService) {}
}
