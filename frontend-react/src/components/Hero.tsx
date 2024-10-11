import { useState } from 'react';

const Hero = () => {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        mensagem: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8081/api/v1/enviar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Mensagem enviada com sucesso!');
            } else {
                alert('Erro ao enviar a mensagem, tente novamente.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao enviar a mensagem, tente novamente.');
        }
    };
    return (
        <div className="pt-32" id="home">
            <div className="">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between my-6">
                    <img
                        src="slide1.jpeg"
                        className="max-w-lg rounded-md animate-slideIn" />
                    <div className=" w-1/2 animate-fade">
                        <h1 className="text-6xl font-bold">Excelência em Gestão Condominial para um Futuro Melhor</h1>
                        <p className="py-6 text-2xl my-3">
                            Na Dias Síndico Profissional, estamos comprometidos em oferecer soluções inovadoras e eficazes
                            para a gestão de condomínios, estabelecendo relações duradouras e de confiança com nossos clientes.
                        </p>
                        <a href="#form">
                            <button className="py-4 px-20 rounded-md font-bold text-xl bg-black border-2 border-yellow-600 mr-7">Saiba mais</button>
                        </a>
                        <a href="https://api.whatsapp.com/send?l=pt&phone=5584991553030&text=Olá, gostaria de saber mais sobre serviços da Dias Sindico Profissional!" target="_blank">
                            <button className="py-4 px-20 rounded-md font-bold text-xl bg-warning text-black">Fale conosco!</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-3xl flex justify-around text-black py-20 font-bold text-3xl my-20">
                <div>
                    <img src="3.png" alt="" className="h-52 pb-5" />
                    <h1>Equipe Qualificada</h1>
                </div>
                <div>
                    <h1>Serviço de Excelência</h1>
                    <img src="2.png" alt="" className="h-52 pt-5" />
                </div>
                <div>
                    <img src="1.png" alt="" className="h-52 pb-5" />
                    <h1>Compromisso</h1>
                </div>
            </div>

            <div className="max-w-3xl mx-auto text-center border-t border-gray-400 w-full py-5">
                <p className="py-6 text-lg" id="services">
                    NOSSOS SERVIÇOS
                </p>
                <h1 className="text-6xl font-bold mb-10">Os serviços que oferecemos são projetados especificamente
                    para atender às suas necessidades!
                </h1>
            </div>

            <div className="flex gap-4 pb-20 animate-slideTop">
                <div className="max-w-sm p-6 border rounded-lg shadow bg-black border-yellow-400 text-center">
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Gestão</h5>
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Condominial</h5>

                    <p className="mb-3 text-gray-600 dark:text-gray-400 text-lg">Oferecemos uma gestão completa e eficiente para condomínios,
                        garantindo organização e tranquilidade para todos os moradores.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-md font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Saiba mais
                        <svg className="w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 border rounded-lg shadow bg-black dark:border-yellow-400 text-center">
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Consultoria Especializada</h5>

                    <p className="mb-3 text-gray-600 dark:text-gray-400 text-lg">Nossa equipe de especialistas oferece consultoria personalizada para otimizar a administração do seu condomínio.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-md font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Saiba mais
                        <svg className="w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 border rounded-lg shadow bg-black dark:border-yellow-400 text-center">
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Transparência Financeira</h5>

                    <p className="mb-3 text-gray-600 dark:text-gray-400 text-lg">Garantimos total transparência na gestão financeira, com relatórios detalhados e acessíveis para todos os moradores.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-md font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Saiba mais
                        <svg className="w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
                <div className="max-w-sm p-6 border rounded-lg shadow bg-black dark:border-yellow-400 text-center">
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Segurança e Conformidade</h5>

                    <p className="mb-3 text-gray-600 dark:text-gray-400 text-lg">Asseguramos que todas as operações estejam em conformidade com as normas legais, garantindo segurança jurídica para o condomínio.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-md font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Saiba mais
                        <svg className="w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="flex py-20 border-t border-gray-400" id="about">
                <img
                    src="orcamento.jpeg"
                    className="w-1/2 rounded-lg shadow-2xl" />
                <div className="px-7 p" id="about">
                    <h3 className="text-3xl text-yellow-400">Por que nos escolher?</h3>
                    <h1 className="text-3xl font-bold py-8">
                        Oferecemos soluções para facilitar a vida dos nossos clientes.
                    </h1>

                    <div className="pl-9 mb-5 border border-yellow-600 p-5 rounded-lg">
                        <div className="flex items-center gap-4">
                            <svg className="left-1 top-1 h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <h1 className="font-semibold text-white flex text-xl">
                                Gestão Profissional
                            </h1>
                        </div>
                        <h2 className="text-lg pt-2">Nossa equipe é especializada em administração condominial, oferecendo serviços de alta qualidade e garantindo a satisfação dos moradores.</h2>
                    </div>
                    <div className="pl-9 mb-5 border border-yellow-600 p-5 rounded-lg">
                        <div className="flex items-center gap-4">
                            <svg className="left-1 top-1 h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <h1 className="font-semibold text-white flex text-xl">
                                Suporte Excepcional
                            </h1>
                        </div>
                        <h2 className="text-lg pt-2">Oferecemos suporte contínuo e eficiente, sempre prontos para resolver qualquer questão ou necessidade dos nossos clientes.</h2>
                    </div>
                    <div className=" border border-yellow-600 p-5 rounded-lg">
                        <div className="flex items-center gap-4">
                            <svg className="left-1 top-1 h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <h1 className="font-semibold text-white flex text-xl">
                                Transparência e Confiabilidade
                            </h1>
                        </div>
                        <h2 id="form" className="text-lg pt-2">Priorizamos a transparência em todas as nossas ações, garantindo confiança e segurança para todos os moradores do condomínio.</h2>
                    </div>

                </div>
            </div>

            <div className="flex my-10 gap-10" id="form">
            <form className="flex flex-1 flex-col w-2/5 p-8 border rounded-lg border-gray-800" onSubmit={handleSubmit}>
                    <div className="flex gap-5 justify-between">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Nome</span>
                            </label>
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome"
                                className="input input-bordered"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Telefone</span>
                            </label>
                            <input
                                type="text"
                                name="telefone"
                                placeholder="( __ ) _____ - ____"
                                className="input input-bordered"
                                value={formData.telefone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">E-mail</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            className="input input-bordered"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <textarea
                        className="textarea mt-5 h-40"
                        name="mensagem"
                        placeholder="Mensagem"
                        value={formData.mensagem}
                        onChange={handleChange}
                    ></textarea>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </div>
                </form>
                {/* <MapComponent /> */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.4695431719238!2d-35.1968856!3d-5.7891524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b30014c0c89323%3A0x211634fef633c8f9!2sR.%20Mossor%C3%B3%2C%20746%20-%20Cidade%20Alta%2C%20Natal%20-%20RN%2C%2059025-090!5e0!3m2!1spt-BR!2sbr!4v1724532393556!5m2!1spt-BR!2sbr"
                    className="w-3/5 rounded-lg">
                </iframe>
            </div>
            <div className="my-20">
                <h1 className="text-3xl font-bold text-center py-16">Alguns clientes parceiros</h1>
                <div className="flex justify-between h-48">
                    <img src="p1.jpg" alt="" />
                    <img src="p2.png" alt="" />
                    <img src="p3.png" alt="" />
                    <img src="p4.jpg" alt="" />
                </div>
            </div>

        </div >
    );
};

export default Hero;