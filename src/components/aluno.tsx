import type { AlunoProps } from "../types/aluno-props";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export function Aluno({ nome, img, rm, github, linkedin }: AlunoProps) {
    return (
        <div className="mt-6 bg-(--bg-2) rounded-xl p-2 text-(--text) mb-4 px-12 py-12 shadow-xl">
            <h4 className="text-(--title) font-bold mb-2">{nome}</h4>
            <div>
                <img src={img} alt={`Integrante ${nome}`}
                    className="block mx-auto m-1 mb-4 w-32 h-32
                                rounded-full border-3 border-solid object-cover text-(--border-2)" />
                <p>1TDSPV</p>
                <p>RM: {rm}</p>
            </div>
            <div className="flex gap-4 mt-2 place-content-center">
                <a href={github} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
            </div>
        </div>
    );
}