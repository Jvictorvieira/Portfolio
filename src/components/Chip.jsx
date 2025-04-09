export const Chip = ({ text }) => {
    return (
        <span
            key={text}
            className="cursor-default bg-highlight-aux/20 text-highlight-aux py-1 px-2 rounded-full text-sm hover:bg-highlight-aux/20 
            hover:shadow-(--shadow-aux-low) transition-all duration-200 relative overflow-hidden hover:-translate-y-0.5"
        >
            {text}
        </span>
    );
}