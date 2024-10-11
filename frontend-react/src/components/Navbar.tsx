const Navbar = () => {
    return (
        <div className="navbar bg-black py-8 fixed top-0 px-28">
            <div className="navbar-start">         
                <a className="flex justify-center">
                    <img src="logo.jpeg" alt="" className="h-16 rounded-full"/>
                </a>
            </div>
            <div className="whitespace-nowrap">
                <nav className="flex text-lg text-md gap-5 items-center justify-between">
                    <a href="#home" className="hover:text-yellow-400 px-4">Home</a>
                    <a href="#about" className="hover:text-yellow-400 px-4">Sobre Nós</a>
                    <a href="#services" className="hover:text-yellow-400 px-4">Serviços</a>
                    <a href="./login.html" className="hover:text-yellow-400 px-4">Painel Administrativo</a>
                    <a href="https://api.whatsapp.com/send?l=pt&phone=5584991553030&text=Olá, gostaria de saber mais sobre serviços da Dias Sindico Profissional!" target="_blank" rel="noopener noreferrer">
                        <button className="bg-warning text-black px-4 py-2 rounded-full font-bold ml-4">
                            Fale no Whatsapp
                        </button>
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
