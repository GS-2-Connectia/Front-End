import { Student } from "../components/student";
import johnny from "../assets/johnny.png";
import luisa from "../assets/luisa.jpg";

export function Members() {
    return (
        <main className="min-h-screen">
            <h1 className="title">
                Integrantes
            </h1>
            <article className="mx-auto w-4/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch justify-items-center">
                    <Student
                        id="1"
                        nome="Johnny Dias Mathias Junior"
                        img={johnny}
                        rm={566516}
                        github="https://github.com/johnny-mathias"
                        linkedin="https://www.linkedin.com/in/johnny-mathias-dev/"
                    />
                    <Student
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