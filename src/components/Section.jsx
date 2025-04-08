import { RevealOnScroll } from "./RevealOnScroll";
export const Section = ({children, textSize, title, id, size =""}) => {
    const textClass = textSize ? "text-5xl md:text-7xl" : "text-3xl md:text-5xl";
    
    return <section id={id} className="min-h-screen flex items-center justify-center ">
           <RevealOnScroll>
                <div className={`text-center z-10 px-4 ${size} `}>
                        <h1 className={`gradient-text  ${textClass} font-bold mb-6 animate-gradient text-transparent`}>
                            {title}
                        </h1>
                        {children}
                </div>
           </RevealOnScroll>
    </section>
}
