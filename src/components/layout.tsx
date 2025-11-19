import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../context/theme-context";
import { ThemedText } from "../types/themed-text";
import { Icon } from "./icon";
import { useEffect, useRef, useState } from "react";
import { DropdownMenu } from "./dropdown-menu";

export function Layout() {
    const { theme, toggleTheme } = useTheme();
    const { gradientText } = ThemedText();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Fechar ao clicar fora
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="bg-(--bg) text-(--text) min-h-screen transition-colors">

            <nav className="flex flex-row items-center bg-(--bg-2) border-(--border) border-b text-(--text) px-4 h-14">
                <div className="ml-16 flex flex-1 gap-4">

                    <Link to="/" className="flex">
                        <span className={`font-bold ${gradientText}`}>
                            Connectia
                        </span>
                        <Icon name="network_intel_node" size={24} />
                    </Link>

                    <Link className="hover:underline" to="/">Home</Link>
                    <Link className="nav-hover" to="/integrantes">Integrantes</Link>
                    <Link className="nav-hover" to="/sobre">Sobre</Link>
                    <Link className="nav-hover" to="/contato">Contato</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="flex items-center gap-1 hover:opacity-80 hover:cursor-pointer"
                    >
                        Conta <AccountCircleIcon sx={{ fontSize: 32 }} className="text-(--icon)" />
                    </button>
                </div>
            </nav>

            {/* ---- MENU COMPONENT ---- */}
            <DropdownMenu
                open={menuOpen}
                menuRef={menuRef}
                theme={theme}
                toggleTheme={toggleTheme}
            />

            <main>
                <Outlet />
            </main>
        </div>
    );
}
