// file imports
// components
// utils
import { About1, About2, About3, About4, About5 } from "../utils/about";
// components
// utils
import Route from "../utils/Route";
// style
import "./style.scss";

const About = () => {
  const Content = () => (
    <div className="about-container">
      <About1
        title="Our Story"
        text="Our story began a year ago in the heart of Huntingdon, Cambridgeshire.
          With a passion for creativity and craftsmanship, we set out to bring
          unique, handcrafted products to life. Since then, we've grown into a
          dedicated team, driven by a love for art and design, committed to
          offering quality and originality in everything we create."
      />
      <About3 />
      <About2
        title="What We Believe In"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          dignissim, lacus non auctor placerat, justo quam aliquet eros, ac
          tristique arcu lacus sit amet nunc. Sed tempus vehicula ex at sodales.
          Vivamus porta nisl non lorem rutrum laoreet. Integer malesuada
          venenatis ligula, a lacinia est volutpat ut."
      />
      <About1
        title="Our Mission"
        text="At the core of our company is a belief in the power of creativity,
          quality, and sustainability. We strive to create products that not
          only inspire but also stand the test of time. Supporting local
          artisans and using ethically sourced materials, we believe in making a
          positive impact on both our community and the environment."
      />
      <About4 />
      <About5 />
    </div>
  );

  return <Route content={<Content />} title={"about"} />;
};

export default About;
