function Header() {
    return(
        <header>
            <h1>Windoor Experts Inc</h1>
            <nav className = "bg-slate-600 text-white shadow-lg flex py-6 px-32 fixed top-0 w-full items-center justify-between">
                <div className="flex items-center gap-4">
                    <img className="w-10" src="https://png.pngtree.com/element_pic/16/11/03/dda587d35b48fd01947cf38931323161.jpg" alt="Logo" />
                    <h2 className="text-2xl font-bold">Precision Contractors</h2>
                </div>
                <div className="flex items-center gap-12 text-lg">
                    <a className="rounded-xl py-1 px-3 hover:text-gray-200 hover:bg-gray-700" href="">Home</a>
                    <a className="rounded-xl py-1 px-3 hover:text-gray-200 hover:bg-gray-700" href="">Services</a>
                    <a className="rounded-xl py-1 px-3 hover:text-gray-200 hover:bg-gray-700" href="">Contact</a>   
                </div>
            </nav>
            <hr />
        </header>
    );
}

export default Header;