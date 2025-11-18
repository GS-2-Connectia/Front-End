import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../context/theme-context";
import { ThemedText } from "../types/themed-text";

export function Layout() {
    const { theme, toggleTheme } = useTheme();
    const { gradientText } = ThemedText();

    return (
        <div className="bg-(--bg) text-(--text) min-h-screen transition-colors">

            <nav className="flex flex-row items-center bg-(--bg-secondary) border-(--border) border-b text-(--text) px-4 h-14">
                <div className="ml-16 flex flex-1 gap-4">
                    <Link
                        className="hover:underline"
                        to="/">
                        <span
                            className={`font-bold ${gradientText}`}>
                            Connectia
                        </span>
                        {"<>"} Home</Link>
                    <Link className="hover:underline" to={"/integrantes"}>Integrantes</Link>
                    <Link className="hover:underline" to={"/sobre"}>Sobre</Link>
                    <Link className="hover:underline" to={"/contato"}>Contato</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme} className="hover:opacity-70 transition">
                        {theme === "light" ? "🌙 Escuro" : "☀️ Claro"}
                    </button>

                    <button className="hover:cursor-pointer">Conta</button>
                </div>
            </nav>

            <Outlet />
        </div>
    );
}
