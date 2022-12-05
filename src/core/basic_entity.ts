import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  VersionColumn,
  Index,
} from "typeorm";
import { ObjectType, Field, Int } from "@nestjs/graphql";

export interface IBasicEntity {
  id: number;
  createdDate: string;
  updatedDate: string;
  version: number;
}

@ObjectType()
export abstract class BasicEntity implements IBasicEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn({ type: "timestamp with time zone" })
  @Index()
  createdDate: string;

  @Field()
  @UpdateDateColumn({ type: "timestamp with time zone" })
  updatedDate: string;

  @Field()
  @VersionColumn()
  version: number;
}

export function PaginatedResponse<TItem>(TItemClass: any): any {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseClass {
    @Field(() => [TItemClass])
    data: TItem[];

    @Field(() => Int)
    count: number;

    @Field(() => Int)
    total: number;

    @Field(() => Int)
    page: number;

    @Field(() => Int)
    pageCount: number;
  }
  return PaginatedResponseClass;
}

@ObjectType()
export class SuccessResponse {
  @Field()
  success: true;
}
