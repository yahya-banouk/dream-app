export default function StepBlock({ icon, title, index }) {
    return (
        <div className="flex items-center space-x-4">
            <img
                src={`/icons/${icon}`}
                alt={`step-${index}`}
                className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <p className="text-sm sm:text-base">{index}. {title}</p>
        </div>
    );
}
