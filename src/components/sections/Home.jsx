import { Section } from "../Section";
import { portfolioInfo } from "../../utils/portfolio";
export const Home = () => {
  return (
    <Section id="home" textSize={true} title="Hi there! I'm João Victor.">
      <p className="text-copy-primary text-lg mb-8 max-w-lg mx-auto">
        {portfolioInfo.description}
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#projects"
          className="bg-cta hover:bg-cta-active text-copy-primary py-3 
                    px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 "
        >
          View projects
        </a>
        <a
          href="#contact"
          className="border border-highlight hover:bg-highlight/20 text-highlight py-3 
                    px-6 rounded font-medium transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5"
        >
          Contact Me
        </a>
      </div>
    </Section>
  );
};
