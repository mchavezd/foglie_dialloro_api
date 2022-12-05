import { InstagramEntity } from "src/instagram/instagram.entity";
import { define } from "typeorm-seeding";
// import { InstagramEntity } from "../../../dist/instagram/instagram.entity";

define(InstagramEntity, () => {
  const instagram = new InstagramEntity();

  instagram.token =
    "IGQVJYVTlQSDUxNllCc3JNTEZAMcEV3OWJ2SzBEeG8xajZAobzlqSlJfb2xDUDlPdFNlU3c5VUJkYTVNN3pBS3FrMkRkR3BJYUZA6YnJfQmlfVUlNWTZAKbjdMejk5SVZArSGtPWHpTSm5n";
  instagram.expiryTime = 0;

  return instagram;
});
