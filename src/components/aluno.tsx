import type { AlunoProps } from "../types/aluno-props";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Aluno({ nome, img, rm, github, linkedin }: AlunoProps) {
    return (
        <div className="flex flex-col justify-center items-center bg-(--bg-2) text-center rounded-xl p-2 text-(--text) mb-4 px-4 py-8 w-90 h-105 shadow-xl">
            <h4 className="text-(--title) text-xl font-bold mb-2">{nome}</h4>
            <div>
                <img src={img} alt={`Integrante ${nome}`}
                    className="block mx-auto m-1 mb-4 w-40 h-40 
                                rounded-full border-3 border-solid object-cover text-(--border-2)" />
                <div className="text-lg">
                    <p>1TDSPV</p>
                    <p>RM: {rm}</p>
                </div>
            </div>
            <div className="flex gap-4 mt-8 place-content-center">
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={32} />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={32} />
                </a>
            </div>
        </div>
    );
}