import { Entity, Column, BeforeInsert } from "typeorm";
import { IsOptional, IsDefined, IsEmail, Length } from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";
import { BasicEntity, IBasicEntity } from "../core/basic_entity";
import * as bcrypt from "bcrypt";

const { CREATE, UPDATE } = CrudValidationGroups;

export interface IUser extends IBasicEntity {
  email: string;
  name: string;
}

@Entity("users")
export class UserEntity extends BasicEntity {
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @IsEmail()
  @Column({ unique: true })
  email: string;

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  name: string;

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  @Length(6)
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }

  toResponseObject(): IUser {
    const { id, name, email, createdDate, updatedDate, version } = this;
    const responseObject: IUser = {
      id,
      name,
      email,
      createdDate,
      updatedDate,
      version,
    };

    return responseObject;
  }
}
