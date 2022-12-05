import { Resolver, Query, Args } from "@nestjs/graphql";
import { ContactService } from "./contact.service";
import { SuccessResponse } from "../core/basic_entity";
import { BadRequestException } from "@nestjs/common";

@Resolver()
export class ContactResolver {
  constructor(private readonly contactService: ContactService) {}

  @Query(() => SuccessResponse)
  async sendMail(
    @Args("name") name: string,
    @Args("email") email: string,
    @Args("message") message: string,
  ): Promise<SuccessResponse> {
    try {
      await this.contactService.sendMail({ name, email, message });
      return { success: true };
    } catch (error) {
      throw new BadRequestException();
    }
  }
}
