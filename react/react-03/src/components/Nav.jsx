function Nav() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="font-bold text-xl">
                    MyLogo
                </div>
                <ul className="flex space-x-4">
                    <li>MENU 1</li>
                    <li>MENU 2</li>
                    <li>MENU 3</li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav;