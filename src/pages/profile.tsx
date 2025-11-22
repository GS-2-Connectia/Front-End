import { UserCard } from "../components/user-card";

export function Profile() {
    return (
        <div>
            <h1 className="title">Perfil</h1>
            <article className="w-15/16 mx-auto">
                <section className="">
                    <h2 className="sub">Nome etc</h2>
                    
                    <UserCard/>
                </section>
                <section>
                    <h2 className="sub">Meus Cursos</h2>
                </section>
            </article>
        </div>
    )
}