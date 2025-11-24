import { useEffect, useState } from "react";
import { UserCard } from "../components/user-card";
import type { User } from "../types/user";
import { API_CONNECTIA } from "../api/connectia";

export function Profile() {
    const [user, setUser] = useState<User[]>([]);

    useEffect(() => {
        fetch(`${API_CONNECTIA}/categorias`)
            .then((data) => data.json())
            .then((data) => setUser(data));
    }, []);
    return (
        <div className="min-h-[75dvh]">
            <h1 className="title">Perfil</h1>
            <article className="w-15/16 mx-auto">
                <section className="">
                    <h2 className="sub">Nome</h2>

                    {user.map((value) => {
                        return <UserCard user={value} />;
                    })}
                </section>
                <section>
                    <h2 className="sub">Meus Cursos</h2>
                </section>
            </article>
        </div>
    )
}