import { useEffect, useRef } from "react";

export const Toast = ({ isSuccess, handleClose, show }) => {

    const bgColor = isSuccess ? "bg-green-500/90" : "bg-red-500/90";
    const message = isSuccess ? "Message sent successfully!" : "Error sending message! Try again later.";
    const icon = isSuccess ? "✓" : "✗";
    const ref = useRef(null);
    useEffect(() => {
        debugger
        if (show) {
            ref.current.classList.add("show-toast");
            
        } else {
            ref.current.classList.remove("show-toast");
        }
    }, [show]);
    return (
        <div
            className={`toast fixed flex bottom-4 right-4 gap-4 p-4 items-center justify-center rounded-lg shadow-xl transition-transform duration-300 transform ${
                bgColor
            }`}
            ref={ref}
        >   
            <div>
            </div>
            <div className="text-sm font-semibold text-copy-secondary">
                {message}
            </div>
            <div className="cursor-pointer text-2xl" onClick={() => handleClose()}>
                &times;
            </div>
        </div>
    );
};