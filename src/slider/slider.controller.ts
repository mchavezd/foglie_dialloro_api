import { Controller, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { SliderEntity } from "./slider.entity";
import { Crud } from "@nestjsx/crud";
import { SliderService } from "./slider.service";

@Crud({
  model: {
    type: SliderEntity,
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
@Controller("v1/slider")
export class SliderController {
  constructor(public service: SliderService) {}
}
