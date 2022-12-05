import { Controller, Get } from "@nestjs/common";
import { InstagramService } from "./instagram.service";
import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class InstagramImage {
  @Field()
  id: string;
  @Field()
  media_type: string;
  @Field()
  media_url: string;
}

@Controller("v1/instagram")
export class InstagramController {
  constructor(private readonly instagramService: InstagramService) {}

  @Get()
  async getImages() {
    return await this.instagramService.getImages();
  }
}
