import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { CoursesContext } from "../context/course-context";
import { loginSchema, type LoginFormData } from "../schemas/login-schema";
import { ThemedText } from "../types/themed-text";

export function Login() {
    const { gradientText } = ThemedText();
    const { login } = useContext(AuthContext);
    const { fetchCourses } = useContext(CoursesContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    async function onSubmit({ username }: LoginFormData) {
        await login(username);
        navigate("/");
        await fetchCourses();
    }

    return (
        <>
            <div className="w-full min-h-[79dvh] p-4 flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <h2 className={`text-3xl font-bold ${gradientText} mb-2`}>Login</h2>
                    <h3 className="text-(--text-2)">Você precisa fazer login para acessar essa página</h3>
                </div>
                <div className="flex h-full min-h-[60dvh] m-auto">
                    <form
                        className="flex flex-col gap-3 justify-center"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <label htmlFor="" className="text-xl">Nome de usuário</label>
                        <input
                            type="text"
                            placeholder="Nome de usuário"
                            className="border rounded p-2 bg-(--bg-2) text-(--text)"
                            {...register("username")}
                        />
                        {errors.username && (
                            <p className="text-red-500">{errors.username.message}</p>
                        )}

                        <label htmlFor="" className="text-xl mt-2">Senha</label>
                        <input
                            type="text"
                            placeholder="Senha"
                            className="border rounded p-2 bg-(--bg-2)"
                            {...register("password")}
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}

                        <button
                            className="border-(--border) highlight text-2xl px-4 py-2 rounded-xl  hover:cursor-pointer"
                            type="submit"
                        >
                            Entrar
                        </button>
                    </form>
                </div>
            </div >
        </>
    );
}
