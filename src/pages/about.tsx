import YouTube from 'react-youtube';

export function About() {
    return (
        <div>
            <h1 className="title">
                Sobre
            </h1>
            <article className="flex flex-col w-4/5 justify-center m-auto">
                <section className='p-2 bg-(--bg-2) rounded-xl'>
                    <h2 className='text-lg text-center'>A <span className='highlight'>Connectia</span> é uma empresa pensada para profissionalizar e também guiar os estudos de pessoas com interesse pela área da tecnologia. Oferecemos cursos de IA e programação para que as pessoas estejam cada vez mais conectadas ao futuro: </h2>
                </section>
                <section className='mt-6 text-4xl'>
                    <h2 className='font-bold text-center'>A tecnologia.</h2>
                </section>
                <section className="flex flex-col md:flex-row gap-4 justify-center mt-10 text-justify">
                    <div className="md:w-1/2">
                        <p>
                            Sabemos que é um grande desafio, muitos não sabem por onde iniciar os estudos, para qual <span className='font-bold'>Carreira</span> seguir, como <span className='font-bold'>Integrar</span> tecnologia no dia a dia do trabalho, como usar Inteligência Artificial da forma correta...
                        </p>
                        <p className='mt-2'>Mas foi pensando nesses problemas que a Connectia pensou na solução: desenvolver uma plataforma de estudos <span className='highlight'>com foco em pessoas já ingressadas no mercado de trabalho</span>, contendo cursos relacionados às suas respectivas áreas, a fim de valorizar e realocar pessoas que antes corriam o risco da obsolência, além de realizar a mentoria pessoal de profissionais que desejam <span className='font-bold'>migrar de área</span>.</p>
                    </div>

                    <div className="md:w-1/2">
                        <YouTube videoId="lX_CfuKeClo" opts={{ width: "100%", height: "315" }} />
                    </div>
                </section>

            </article>
        </div>
    )
}