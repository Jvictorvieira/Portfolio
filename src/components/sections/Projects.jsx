import { portfolioInfo } from "../../utils/portfolio"
import { Section } from "../Section"
import { Chip } from "../Chip"
export const Projects = () => {
    return <Section title={"Featured Projects"} id="projects" textSize={true} size="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioInfo.projects.map((project, index) => (
                <div key={index} className="border border-border rounded-xl p-6 hover:-translate-y-0.5 transition-all hover:border-highlight hover:shadow-[0_2px_8px_highlight-high]">
                    <h3 className="text-copy-primary text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-copy-primary mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.stacks.map((tech, index) => (
                            <Chip text={tech}/>
                        ))}
                    </div>
                   <div className="flex justify-between items-center">
                        <a href={project.link} className="text-highlight hover:text-highlight/80 transition-colors duration-200">View Project ➝</a>
                   </div>
                </div>
            ))}
        </div>
    </Section>
}