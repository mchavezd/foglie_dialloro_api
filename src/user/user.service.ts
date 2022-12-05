import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { UserEntity, IUser } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService extends TypeOrmCrudService<UserEntity> {
  constructor(@InjectRepository(UserEntity) repo) {
    super(repo);
  }

  async changePassword(password: string, user: IUser): Promise<void> {
    const passwordHash = await bcrypt.hash(password, 10);

    await this.repo.save({
      ...user,
      password: passwordHash,
    });
  }

  async onModuleInit() {
    const email = "admin@mail.com";

    const firstUser = await this.repo.findOne({
      email,
    });

    if (!firstUser) {
      const passwordHash = await bcrypt.hash("123456", 10);

      this.repo.save({
        email,
        password: passwordHash,
        name: "Admin",
      });
    }
  }
}
