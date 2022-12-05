import * as Faker from "faker";
import { ProjectEntity } from "src/project/project.entity";
import { define } from "typeorm-seeding";
// import { ProjectEntity } from "../../../dist/project/project.entity";

const content = `<p>Perspiciatis tempora quia sit et a saepe facilis. Illo expedita et hic illum reiciendis iure at est. Est consequuntur molestiae. Corporis autem et tempora et. Tempore nesciunt ex sint saepe id. Ipsum vel sint qui id impedit quod adipisci. Accusantium repellat voluptate est dolore et ad. Libero labore hic impedit ipsam culpa vitae doloribus. Ut cupiditate consequatur est voluptatem sunt debitis ut. Adipisci est nostrum cupiditate alias beatae quis. Praesentium quidem rerum sed vitae quia reprehenderit. Eligendi saepe tenetur earum qui. Laboriosam vero distinctio. Voluptas ut ut dolorem cupiditate dolores fugiat suscipit accusantium. Et eum quam enim. Tempore omnis tempora. Molestiae suscipit est. A necessitatibus in quisquam. Excepturi assumenda nemo et eaque.</p>
<p><img src="https://picsum.photos/640/480" alt="" width="49%" /><img style="float: right;" src="https://picsum.photos/640/480" alt="" width="49%" /></p>
<p>Perspiciatis tempora quia sit et a saepe facilis. Illo expedita et hic illum reiciendis iure at est. Est consequuntur molestiae. Corporis autem et tempora et. Tempore nesciunt ex sint saepe id. Ipsum vel sint qui id impedit quod adipisci. Accusantium repellat voluptate est dolore et ad. Libero labore hic impedit ipsam culpa vitae doloribus. Ut cupiditate consequatur est voluptatem sunt debitis ut. Adipisci est nostrum cupiditate alias beatae quis. Praesentium quidem rerum sed vitae quia reprehenderit. Eligendi saepe tenetur earum qui. Laboriosam vero distinctio. Voluptas ut ut dolorem cupiditate dolores fugiat suscipit accusantium. Et eum quam enim. Tempore omnis tempora. Molestiae suscipit est. A necessitatibus in quisquam. Excepturi assumenda nemo et eaque.</p>
<p><img src="https://picsum.photos/640/480" alt="" width="100%" /></p>
<p>Perspiciatis tempora quia sit et a saepe facilis. Illo expedita et hic illum reiciendis iure at est. Est consequuntur molestiae. Corporis autem et tempora et. Tempore nesciunt ex sint saepe id. Ipsum vel sint qui id impedit quod adipisci. Accusantium repellat voluptate est dolore et ad. Libero labore hic impedit ipsam culpa vitae doloribus. Ut cupiditate consequatur est voluptatem sunt debitis ut. Adipisci est nostrum cupiditate alias beatae quis. Praesentium quidem rerum sed vitae quia reprehenderit. Eligendi saepe tenetur earum qui. Laboriosam vero distinctio. Voluptas ut ut dolorem cupiditate dolores fugiat suscipit accusantium. Et eum quam enim. Tempore omnis tempora. Molestiae suscipit est. A necessitatibus in quisquam. Excepturi assumenda nemo et eaque.</p>`;

define(ProjectEntity, (faker: typeof Faker) => {
  const project = new ProjectEntity();

  const title = faker.lorem.words(2);
  project.titleAz = title;
  project.titleEn = `${title} en`;
  project.titleRu = `${title} ru`;

  const client = faker.lorem.words(2);
  project.clientAz = client;
  project.clientEn = `${client} en`;
  project.clientRu = `${client} ru`;

  const location = faker.lorem.words(2);
  project.locationAz = location;
  project.locationEn = `${location} en`;
  project.locationRu = `${location} ru`;

  project.date = "2018-07-13";
  project.noContent = Math.random() > 0.5;

  const scale = faker.lorem.words(2);
  project.scaleAz = scale;
  project.scaleEn = `${scale} en`;
  project.scaleRu = `${scale} ru`;

  project.contentAz = content;
  project.contentEn = `${content} en`;
  project.contentRu = `${content} ru`;

  return project;
});
