import { Controller, Post, Body } from "@nestjs/common";
import { ContactService } from "./contact.service";

export interface ContactDto {
  name: string;
  email: string;
  message: string;
}

@Controller("v1/contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async sendMail(@Body() contactDto: ContactDto) {
    return await this.contactService.sendMail(contactDto);
  }
}
