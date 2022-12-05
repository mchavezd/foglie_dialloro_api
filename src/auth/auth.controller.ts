import {
  Controller,
  Post,
  Body,
  Response,
  UseGuards,
  Request,
} from "@nestjs/common";
import { LoginDto } from "./login.dto";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { PasswordChangeDto } from "./passwordChange.dto";

@Controller("v1/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard("local"))
  @Post("login")
  public async login(@Response() res, @Body() loginDto: LoginDto) {
    const payload = await this.authService.login(
      loginDto.email,
      loginDto.password,
    );
    return res.json(payload);
  }

  @UseGuards(AuthGuard("jwt"))
  @Post("me")
  public async me(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard("jwt"))
  @Post("change-password")
  async changePassword(@Body() body: PasswordChangeDto, @Request() req) {
    return await this.authService.changePassword(body, req.user);
  }
}
