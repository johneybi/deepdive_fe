function Button({text, color = 'blue'}) {
    const colorVariants = {
        blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-400',
        gray: 'bg-gray-500 hover:bg-gray-600 focus:ring-gray-400',
    }

    const baseStyles = 'text-white font-semibold py-2 px-4 mx-1 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-colors duration-300';

    // Get the specific color variant, or fallback to gray if the color prop is not found
    const colorClass = colorVariants[color] || colorVariants.gray;

    return (
        <button className={`${baseStyles} ${colorClass}`}>
            {text}
        </button>
    )
}

export default Button;