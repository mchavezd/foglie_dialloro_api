import { Resolver, Query } from "@nestjs/graphql";
import { AboutService } from "./about.service";
import { AboutEntity } from "./about.entity";

@Resolver(() => AboutEntity)
export class AboutResolver {
  constructor(private readonly aboutService: AboutService) {}

  @Query(() => AboutEntity)
  async about() {
    return this.aboutService.findOne({
      relations: ["image", "image1", "image2", "image3", "image4"],
    });
  }
}
