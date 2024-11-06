import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/enviar', {
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
        <div className="pt-16 max-w-screen-xl mx-auto" id="home">
            <div data-aos="fade-up" className="flex flex-col lg:flex-row justify-between my-6 px-8 md:px-0">
                <div className="lg:w-1/2">
                    <h1 className="lg:text-6xl text-4xl font-bold">Excelência em Gestão Condominial para um Futuro Melhor</h1>
                    <p className="py-6 lg:text-2xl text-xl my-3">
                        Na Dias Síndico Profissional, estamos comprometidos em oferecer soluções inovadoras e eficazes
                        para a gestão de condomínios, estabelecendo relações duradouras e de confiança com nossos clientes.
                    </p>
                    <a href="#form">
                        <button className="py-4 px-20 rounded-md font-bold text-xl bg-black border-2 border-yellow-600 mr-7">Saiba mais</button>
                    </a>
                    <a href="https://api.whatsapp.com/send?l=pt&phone=5584991553030&text=Olá, gostaria de saber mais sobre serviços da Dias Sindico Profissional!" target="_blank">
                        <button className="py-4 px-20 rounded-md font-bold text-xl bg-warning text-black my-5 sm:my-0">Fale conosco!</button>
                    </a>
                </div>
                <img
                    src="slide1.jpeg"
                    className="max-w-lg rounded-md my-8 sm:my-0" />
            </div>
            <div data-aos="fade-left" className="bg-white md:rounded-3xl lg:flex-row justify-around flex-col sm:flex text-black py-20 font-bold text-3xl my-20">
                <div className='text-center'>
                    <img src="3.png" alt="" className="h-32 sm:h-52 my-5 mx-auto" />
                    <h1>Equipe Qualificada</h1>
                </div>
                <div className='text-center'>
                    <img src="2.png" alt="" className="h-32 sm:h-52 my-5 mx-auto" />
                    <h1>Serviço de Excelência</h1>
                </div>
                <div className='text-center'>
                    <img src="1.png" alt="" className="h-32 lg:h-52 my-5 mx-auto" />
                    <h1>Compromisso</h1>
                </div>
            </div>

            <div data-aos="fade-right" className="max-w-3xl mx-auto text-center py-5">
                <p className="py-6 text-lg" id="services">
                    NOSSOS SERVIÇOS
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
                    Os serviços que oferecemos são projetados especificamente para atender às suas necessidades!
                </h1>
            </div>

            <div data-aos="fade-up" className="flex flex-col lg:flex-row gap-4 pb-20 m-8 sm:m-0">
                <div className="mx-auto max-w-sm p-6 border rounded-lg shadow bg-black border-yellow-400 text-center">
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
                <div className="mx-auto max-w-sm p-6 border rounded-lg shadow bg-black dark:border-yellow-400 text-center">
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Consultoria Especializada</h5>

                    <p className="mb-3 text-gray-600 dark:text-gray-400 text-lg">Nossa equipe de especialistas oferece consultoria personalizada para otimizar a administração do seu condomínio.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-md font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Saiba mais
                        <svg className="w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
                <div className="mx-auto max-w-sm p-6 border rounded-lg shadow bg-black dark:border-yellow-400 text-center">
                    <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Transparência Financeira</h5>

                    <p className="mb-3 text-gray-600 dark:text-gray-400 text-lg">Garantimos total transparência na gestão financeira, com relatórios detalhados e acessíveis para todos os moradores.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-md font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Saiba mais
                        <svg className="w-3.5 h-3.5 ms-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
                <div className="mx-auto max-w-sm p-6 border rounded-lg shadow bg-black dark:border-yellow-400 text-center">
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
            <div className='border-t border-gray-500 w-full h-10'></div>

            <div className="flex flex-col lg:flex-row my-10 gap-10 mx-4 sm:mx-0" id="form">
                <form
                    data-aos="fade-up"
                    className="flex flex-1 flex-col w-full lg:w-2/5 sm:p-8 p-4 border rounded-lg"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col sm:flex-row gap-5 justify-between">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Nome</span>
                            </label>
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome"
                                className="input input-bordered"
                                value={formData.name}
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
                                value={formData.phone}
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
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" type="submit">
                            Enviar
                        </button>
                    </div>
                </form>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.4695431719238!2d-35.1968856!3d-5.7891524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b30014c0c89323%3A0x211634fef633c8f9!2sR.%20Mossor%C3%B3%2C%20746%20-%20Cidade%20Alta%2C%20Natal%20-%20RN%2C%2059025-090!5e0!3m2!1spt-BR!2sbr!4v1724532393556!5m2!1spt-BR!2sbr"
                    className="w-full lg:w-3/5 rounded-lg lg:px-10 px-5"
                ></iframe>
            </div>
            <div data-aos="fade-up" className="my-20 px-8">
                <h1 className="text-3xl font-bold text-center py-16">Alguns clientes parceiros</h1>
                <div className="flex justify-around flex-wrap mx-auto gap-8">
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