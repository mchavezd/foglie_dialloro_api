import { AboutEntity } from "src/about/about.entity";
import { define } from "typeorm-seeding";
// import { AboutEntity } from "../../../dist/about/about.entity";

const text = `<p>Foglie D’alloro is a Baku based, design company founded in 2016. The firm specializes in providing design solutions in Baku and beyond. We are a team of creative and committed designers always on hand to deliver a comprehensive range of our services, expertise and advice to help you achieve your most daring ideas.</p>
  <p>We recognize that it is not just good design and ideas that are important, good execution is vital as well; to win client confidence, and ensure client satisfaction. We approach each project individually and contribute to it through innovative solutions.</p>
`;

define(AboutEntity, () => {
  const about = new AboutEntity();

  const title = "Foglie D’alloro";
  about.titleAz = title;
  about.titleEn = `${title} en`;
  about.titleRu = `${title} ru`;

  about.textAz = text;
  about.textEn = `${text} en`;
  about.textRu = `${text} ru`;

  return about;
});
