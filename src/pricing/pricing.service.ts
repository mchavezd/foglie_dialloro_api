import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { PricingEntity } from "./pricing.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PricingService extends TypeOrmCrudService<PricingEntity> {
  constructor(@InjectRepository(PricingEntity) repo) {
    super(repo);
  }
}
