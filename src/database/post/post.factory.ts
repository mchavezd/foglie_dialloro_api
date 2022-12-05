import * as Faker from "faker";
import { PostEntity } from "src/post/post.entity";
import { define } from "typeorm-seeding";
// import { PostEntity } from "../../../dist/post/post.entity";

const content = `<p>Perspiciatis tempora quia sit et a saepe facilis. Illo expedita et hic illum reiciendis iure at est. Est consequuntur molestiae. Corporis autem et tempora et. Tempore nesciunt ex sint saepe id. Ipsum vel sint qui id impedit quod adipisci. Accusantium repellat voluptate est dolore et ad. Libero labore hic impedit ipsam culpa vitae doloribus. Ut cupiditate consequatur est voluptatem sunt debitis ut. Adipisci est nostrum cupiditate alias beatae quis. Praesentium quidem rerum sed vitae quia reprehenderit. Eligendi saepe tenetur earum qui. Laboriosam vero distinctio. Voluptas ut ut dolorem cupiditate dolores fugiat suscipit accusantium. Et eum quam enim. Tempore omnis tempora. Molestiae suscipit est. A necessitatibus in quisquam. Excepturi assumenda nemo et eaque.</p>
<p><img src="https://picsum.photos/640/480" alt="" width="49%" /><img style="float: right;" src="https://picsum.photos/640/480" alt="" width="49%" /></p>
<p>Perspiciatis tempora quia sit et a saepe facilis. Illo expedita et hic illum reiciendis iure at est. Est consequuntur molestiae. Corporis autem et tempora et. Tempore nesciunt ex sint saepe id. Ipsum vel sint qui id impedit quod adipisci. Accusantium repellat voluptate est dolore et ad. Libero labore hic impedit ipsam culpa vitae doloribus. Ut cupiditate consequatur est voluptatem sunt debitis ut. Adipisci est nostrum cupiditate alias beatae quis. Praesentium quidem rerum sed vitae quia reprehenderit. Eligendi saepe tenetur earum qui. Laboriosam vero distinctio. Voluptas ut ut dolorem cupiditate dolores fugiat suscipit accusantium. Et eum quam enim. Tempore omnis tempora. Molestiae suscipit est. A necessitatibus in quisquam. Excepturi assumenda nemo et eaque.</p>
<p><img src="https://picsum.photos/640/480" alt="" width="100%" /></p>
<p>Perspiciatis tempora quia sit et a saepe facilis. Illo expedita et hic illum reiciendis iure at est. Est consequuntur molestiae. Corporis autem et tempora et. Tempore nesciunt ex sint saepe id. Ipsum vel sint qui id impedit quod adipisci. Accusantium repellat voluptate est dolore et ad. Libero labore hic impedit ipsam culpa vitae doloribus. Ut cupiditate consequatur est voluptatem sunt debitis ut. Adipisci est nostrum cupiditate alias beatae quis. Praesentium quidem rerum sed vitae quia reprehenderit. Eligendi saepe tenetur earum qui. Laboriosam vero distinctio. Voluptas ut ut dolorem cupiditate dolores fugiat suscipit accusantium. Et eum quam enim. Tempore omnis tempora. Molestiae suscipit est. A necessitatibus in quisquam. Excepturi assumenda nemo et eaque.</p>`;

define(PostEntity, (faker: typeof Faker) => {
  const post = new PostEntity();

  const title = faker.lorem.words(2);
  post.titleAz = title;
  post.titleEn = `${title} en`;
  post.titleRu = `${title} ru`;

  const description = faker.lorem.paragraph();
  post.descriptionAz = description;
  post.descriptionEn = `${description} en`;
  post.descriptionRu = `${description} ru`;

  post.contentAz = content;
  post.contentEn = `${content} en`;
  post.contentRu = `${content} ru`;

  return post;
});
