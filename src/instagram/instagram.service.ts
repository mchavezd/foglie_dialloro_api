import { Injectable, HttpService } from "@nestjs/common";
import { InstagramImage } from "./instagram.controller";
import { InjectRepository } from "@nestjs/typeorm";
import { InstagramEntity } from "./instagram.entity";

@Injectable()
export class InstagramService {
  constructor(
    @InjectRepository(InstagramEntity)
    private repo,
    private httpService: HttpService
  ) {}

  async onModuleInit() {
    const tokenData = await this.getToken();

    if (!tokenData) {
      this.repo.save({
        token: "IGQVJYVTlQSDUxNllCc3JNTEZAMcEV3OWJ2SzBEeG8xajZAobzlqSlJfb2xDUDlPdFNlU3c5VUJkYTVNN3pBS3FrMkRkR3BJYUZA6YnJfQmlfVUlNWTZAKbjdMejk5SVZArSGtPWHpTSm5n",
        expiryTime: 0,
      });
    }
  }

  private getToken(): Promise<InstagramEntity> {
    return this.repo.findOne({order: { id: "DESC" }});
  }

  private updateToken(data: any): Promise<InstagramEntity> {
    return this.repo.save({token: data.access_token, expiryTime: data.expires_in});
  }

  // Should be refreshed if token expires in less than a month
  private shouldRefreshToken(tokenData: InstagramEntity) {
    const nextMonth = new Date().setMonth(new Date().getMonth() + 1);
    const nextMonthTime = Math.floor(nextMonth / 1000);
    const createdDate = Date.parse(tokenData.createdDate);
    const createdDateTime = Math.floor(createdDate / 1000);
    const expiryTime = tokenData.expiryTime; // seconds before token expires (2 month)

    return (createdDateTime + expiryTime - nextMonthTime < 0);
  }

  public async getImages(): Promise<InstagramImage[] | any> {
    const tokenData = await this.getToken();
    
    if(this.shouldRefreshToken(tokenData)) {
        const newToken = await this.httpService
                .get(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${tokenData.token}`)
                .toPromise();
            
        this.updateToken(newToken.data);
    }

    const result = await this.httpService
        .get(`https://graph.instagram.com/me/media?fields=media_type,media_url&access_token=${tokenData.token}`)
        .toPromise();

    return result?.data?.data?.filter((image) => image.media_type === "CAROUSEL_ALBUM" || image.media_type === "IMAGE");
  }
}
