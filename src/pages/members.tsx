import { Aluno } from "../components/aluno";
import johnny from "../assets/johnny.png";
import luisa from "../assets/luisa.jpg";

export function Members() {
    return (
        <main>
            <h1 className="flex justify-center text-xl font-bold text-(--text)">
                Integrantes
            </h1>
            <article className="flex flex-col text-center place-content-center">
                <div className="flex flex-row place-content-around">
                    <Aluno
                        id="1"
                        nome="Johnny Dias Mathias Junior"
                        img={johnny}
                        rm={566516}
                        github="https://github.com/johnny-mathias"
                        linkedin="https://www.linkedin.com/in/johnny-mathias-dev/"
                    />
                    <Aluno
                        id="2"
                        nome="Luisa Ganasevici de Abreu"
                        img={luisa}
                        rm={563403}
                        github="https://github.com/luisa-ganasevici"
                        linkedin="https://www.linkedin.com/in/luisa-ganasevici-316824356/"
                    />
                </div>
            </article>
        </main>
    )
}