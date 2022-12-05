import { Resolver, Query } from "@nestjs/graphql";
import { SliderService } from "./slider.service";
import { SliderEntity } from "./slider.entity";

@Resolver(() => SliderEntity)
export class SliderResolver {
  constructor(private readonly sliderService: SliderService) {}

  @Query(() => [SliderEntity])
  async slider() {
    return this.sliderService.find({
      relations: ["image"],
      order: {
        id: "ASC",
      },
    });
  }
}
