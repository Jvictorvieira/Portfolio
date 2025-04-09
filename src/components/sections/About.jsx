import { portfolioInfo } from "../../utils/portfolio";
import { Chip } from "../Chip";
import { Section } from "../Section";
export const About = () => {


    return <Section id="about" textSize={false} title="About Me" size="mx-auto max-w-3xl">
        <div className="rounded-xl p-8 border-border border hover:-translate-y-1 transition-all">
            <p className="text-copy-primary mb-6">{portfolioInfo.about}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 ">
                    <h3 className="text-xl text-copy-primary font-bold mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                        {portfolioInfo.frontendSkills.map((skill, index) => (
                            <div key={index}>
                                <Chip text={skill}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-xl p-6 ">
                    <h3 className="text-xl text-copy-primary font-bold mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2 items-center justify-center">
                        {portfolioInfo.backendSkills.map((skill, index) => (
                            <div key={index}>
                                <Chip text={skill}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="rounded-xl p-6 ">
                    <h3 className="text-xl text-copy-primary font-bold mb-4">DevOps & Infrastructure</h3>
                    <div className="flex flex-wrap gap-2">
                        {portfolioInfo.devopsSkills.map((skill, index) => (
                            <div key={index}>
                                <Chip text={skill}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-border border hover:hover:-translate-y-1 transition-all">
                <h3 className="text-xl front-bold mb-4 text-copy-primary">🎓 Education</h3>
                <ul className="list-disc list-inside text-copy-primary space-y-2">
                    {portfolioInfo.education.map((edu, index) => (
                        <li key={index} className="mb-2">
                            <strong>{edu.degree}</strong> at {edu.institution} ({edu.year})
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-6 rounded-xl border-border border hover:hover:-translate-y-1 transition-all">
                <h3 className="text-xl front-bold mb-4 text-copy-primary" >💼 Work Experience</h3>
                <div className="space-y-4 text-copy-primary">
                    {portfolioInfo.work.map((job, index) => (
                        <div key={index} className="mb-2">
                            <h4 className="font-semibold">{job.position} at {job.company} ({job.year})</h4>
                            <p className="text-sm">{job.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Section>
}