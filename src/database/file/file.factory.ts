import { FileEntity } from "src/file/file.entity";
import { define } from "typeorm-seeding";
// import { FileEntity } from "../../../dist/file/file.entity";

define(FileEntity, () => {
  const image = new FileEntity();

  const width = 640;
  const height = 480;
  image.url = `https://picsum.photos/${width}/${height}`;
  image.width = width;
  image.height = height;

  return image;
});
