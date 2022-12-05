import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MembersModule } from "./member/member.module";
import { PostsModule } from "./post/post.module";
import { CategoryModule } from "./category/category.module";
import { ProjectModule } from "./project/project.module";
import { AboutModule } from "./about/about.module";
import { PricingModule } from "./pricing/pricing.module";
import { ContactModule } from "./contact/contact.module";
import { SliderModule } from "./slider/slider.module";
import { FileModule } from "./file/file.module";
import connectionOptions from "../ormconfig";
import { InstagramModule } from "./instagram/instagram.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(connectionOptions),
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
      include: [
        MembersModule,
        PostsModule,
        CategoryModule,
        AboutModule,
        PricingModule,
        ProjectModule,
        SliderModule,
        ContactModule,
        InstagramModule
      ],
    }),
    UserModule,
    AuthModule,
    MembersModule,
    PostsModule,
    CategoryModule,
    ProjectModule,
    AboutModule,
    PricingModule,
    ContactModule,
    SliderModule,
    FileModule,
    InstagramModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
