import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Função para alternar a visibilidade do menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="z-50 max-w-screen-xl mx-auto flex justify-between">
            <div className="px-10 py-6 flex justify-between flex-1">
                <a>
                    <img src="logo.jpeg" alt="logo" className="h-12 md:h-16 rounded-full" />
                </a>

                {/* Menu hamburguer para telas menores */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Fundo transparente quando o menu estiver aberto */}
            {isOpen && (
                <div
                    className={`fixed inset-0 z-40`}
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Links do menu - escondido em telas pequenas, visível no dropdown */}
            <div
                className={`fixed top-0 left-0 w-3/4 h-full bg-black transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 lg:relative lg:w-auto lg:h-auto lg:translate-x-0 lg:flex lg:items-center`}
            >
                <nav className="flex flex-col lg:flex-row text-lg text-md gap-5 items-center justify-between p-5 lg:p-0 lg:gap-8">
                    <a href="#home" className="hover:text-yellow-400 px-4">
                        Home
                    </a>
                    <a href="#about" className="hover:text-yellow-400 px-4">
                        Sobre Nós
                    </a>
                    <a href="#services" className="hover:text-yellow-400 px-4">
                        Serviços
                    </a>
                    <a href="./login.html" className="hover:text-yellow-400 px-4">
                        Painel Administrativo
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?l=pt&phone=5584991553030&text=Olá, gostaria de saber mais sobre serviços da Dias Sindico Profissional!"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="bg-warning text-black px-4 py-2 rounded-full font-bold mt-4 lg:mt-0">
                            Fale no Whatsapp
                        </button>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
