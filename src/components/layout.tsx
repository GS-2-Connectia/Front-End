import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div>
            <nav className="flex flex-row items-center bg-purple-950 border-b-2 border-purple-900 text-white px-4 h-14">
                <div className="ml-16 flex flex-1 gap-4">
                    <Link to="/home">
                        <span className="font-bold bg-linear-to-r from-[#5170ff] to-[#ff66c4] text-transparent bg-clip-text">
                            Connectia
                        </span> {"<>"} Home</Link>
                    <Link to={"/integrantes"}>Integrantes</Link>
                    <Link to={"/sobre"}>Sobre</Link>
                    <Link to={"/contato"}>Contato</Link>

                </div>

                <div>
                    <button className="hover:cursor-pointer">Conta</button>
                </div>
            </nav>

            <Outlet />
        </div>
    )
}