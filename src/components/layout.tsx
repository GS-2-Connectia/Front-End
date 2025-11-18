import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../context/theme-context";
import { ThemedText } from "../types/themed-text";
import { Icon } from "./icon";

export function Layout() {
    const { theme, toggleTheme } = useTheme();
    const { gradientText } = ThemedText();

    return (
        <div className="bg-(--bg) text-(--text) min-h-screen transition-colors">

            <nav className="flex flex-row items-center bg-(--bg-secondary) border-(--border) border-b text-(--text) px-4 h-14">
                <div className="ml-16 flex flex-1 gap-4">

                    <Link to="/" className="flex">
                        <span className={`${gradientText}`}>
                            Connectia
                        </span>
                        <Icon name="network_intel_node" size={24} />
                    </Link>
                    <Link className="hover:underline"
                        to="/">

                        Home
                    </Link>
                    <Link className="nav-hover" to={"/integrantes"}>Integrantes</Link>
                    <Link className="nav-hover" to={"/sobre"}>Sobre</Link>
                    <Link className="nav-hover" to={"/contato"}>Contato</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button onClick={toggleTheme} className="hover:opacity-70 transition hover:cursor-pointer">
                        {theme === "light" ? "🌙 Escuro" : "☀️ Claro"}
                    </button>

                    <button className="hover:cursor-pointer">Conta <AccountCircleIcon className="text-(--icon)" /></button>
                </div>
            </nav>

            <Outlet />
        </div>
    );
}
