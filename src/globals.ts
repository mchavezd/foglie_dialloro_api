import * as AWS from "aws-sdk";
import * as multerS3 from "multer-s3";

export const s3 = new AWS.S3({
  // accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  // secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  accessKeyId: "AKIAV27XGHHNYIB4OJA2",
  secretAccessKey: "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",
});
 
export const multerOptions: multerS3.MulterOptions = {
  storage: multerS3({
    s3: s3,
    // bucket: process.env.AWS_BUCKET_NAME,
    bucket: "fogliebn",
    acl: "public-read",
  }),
};
