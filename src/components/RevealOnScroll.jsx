import { useEffect } from "react"
import { useRef } from "react"


export const RevealOnScroll = ({children}) => {
    const ref = useRef(null)
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry]) => {
            debugger
            if (entry.isIntersecting) {
                ref.current.classList.add("visible")
            } else {
                ref.current.classList.remove("visible")
            }         
        }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" })

        if (ref.current) {
            observer.observe(ref.current)
        }
        return () => observer.disconnect()
    })
    return <div ref={ref} className="reveal">
        {children}
    </div>
}