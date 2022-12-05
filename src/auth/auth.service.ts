import { Injectable, BadRequestException } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { IUser, UserEntity } from "../user/user.entity";
import { Maybe } from "../core/utils";
import { PasswordChangeDto } from "./passwordChange.dto";

interface IJWTPayload {
  token: string;
  type: "Bearer";
  expiresInSeconds: number;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<Maybe<IJWTPayload>> {
    const user = await this.validateUser(email, password);
    if (!user) {
      return null;
    }
    const payload = this.createToken(user);
    return payload;
  }

  createToken(user: IUser): IJWTPayload {
    const expiresInSeconds = 60 * 60 * 3;
    const token = this.jwtService.sign(user, {
      expiresIn: expiresInSeconds,
    });

    return {
      token,
      type: "Bearer",
      expiresInSeconds,
    };
  }

  async validateUserToken(payload: IUser): Promise<Maybe<IUser>> {
    const user = await this.userService.findOne({
      where: { email: payload.email },
    });

    if (!user) {
      return null;
    }

    return user.toResponseObject();
  }

  async validateUser(email: string, password: string): Promise<Maybe<IUser>> {
    const user = await this.userService.findOne({
      where: { email },
    });
    if (!user) {
      return null;
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return null;
    }

    return user.toResponseObject();
  }

  async changePassword(
    passwordChangeForm: PasswordChangeDto,
    userEntity: UserEntity,
  ): Promise<void> {
    const user = await this.validateUser(
      userEntity.email,
      passwordChangeForm.currentPassword,
    );

    if (
      !user ||
      passwordChangeForm.password !== passwordChangeForm.passwordConfirmation
    ) {
      throw new BadRequestException("Bad request");
    }

    return await this.userService.changePassword(
      passwordChangeForm.password,
      user,
    );
  }
}
