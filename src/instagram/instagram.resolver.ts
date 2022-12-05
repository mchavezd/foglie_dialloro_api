import { Resolver, Query } from "@nestjs/graphql";
import { InstagramService } from "./instagram.service";
import { BadRequestException } from "@nestjs/common";
import { InstagramImage } from "./instagram.controller";

@Resolver()
export class InstagramResolver {
  constructor(private readonly instagramService: InstagramService) {}
    
  @Query(() => [InstagramImage])
  async instagramImages(): Promise<InstagramImage[]> {
    try {
        return await this.instagramService.getImages();
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
