import { Entity, Column, JoinColumn, ManyToOne } from "typeorm";
import { IsOptional, IsDefined } from "class-validator";
import { CrudValidationGroups } from "@nestjsx/crud";
import { BasicEntity } from "../core/basic_entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { FileEntity } from "../file/file.entity";
import { CategoryEntity } from "../category/category.entity";

const { CREATE, UPDATE } = CrudValidationGroups;

@ObjectType()
@Entity("projects")
export class ProjectEntity extends BasicEntity {
  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  titleAz: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  titleEn: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column({ default: false })
  titleRu: string;

  @Field()
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @Column()
  noContent: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @Column({ nullable: true })
  clientAz: string;

  @Field({ nullable: true })
  @IsOptional()
  @Column({ nullable: true })
  clientEn: string;

  @Field({ nullable: true })
  @IsOptional()
  @Column({ nullable: true })
  clientRu: string;

  @Field({ nullable: true })
  @IsOptional()
  @Column({ nullable: true })
  locationAz: string;

  @Field({ nullable: true })
  @IsOptional()
  @Column({ nullable: true })
  locationEn: string;

  @Field({ nullable: true })
  @IsOptional()
  @Column({ nullable: true })
  locationRu: string;

  @Field({ nullable: true })
  @IsOptional()
  @Column({ nullable: true })
  scaleAz: string;

  @Field({ nullable: true })
  @IsOptional()
  @Column({ nullable: true })
  scaleEn: string;

  @Field({ nullable: true })
  @IsOptional()
  @Column({ nullable: true })
  scaleRu: string;

  @Field({ nullable: true })
  @IsOptional()
  @Column({ type: "date", nullable: true })
  date: string;

  @Field({ nullable: true })
  @IsOptional()
  @Column({ nullable: true })
  contentAz: string;

  @Field({ nullable: true })
  @IsOptional()
  @Column({ nullable: true })
  contentEn: string;

  @Field({ nullable: true })
  @IsOptional()
  @Column({ nullable: true })
  contentRu: string;

  @Field(() => FileEntity)
  @ManyToOne(() => FileEntity)
  @JoinColumn()
  image: FileEntity;

  @Field(() => CategoryEntity)
  @ManyToOne(() => CategoryEntity, (category) => category.projects)
  category: CategoryEntity;
}
