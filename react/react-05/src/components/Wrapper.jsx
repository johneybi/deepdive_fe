function Wrapper ({text = "hello", children}) {
    return (
        <div className="p-5 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Wrapper contents</h2>
            {children}
            {text}
        </div>
    )
}

export default Wrapper;