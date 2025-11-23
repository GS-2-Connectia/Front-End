import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().nonempty("O nome é obrigatório"),
  email: z.email().nonempty("O email é obrigatório"),
  password: z.string().nonempty("A senha é obrigatória").min(4, "A senha precisa de ter no minimo 4 digitos")
    //     idUsuario: number;   auto
    //     idCarreira: number;  select
    //     nmUsuario: String;   input
    //     email: String;       input
    //     senha: String;       input
    //     tpPlano: String;     auto (gratis)
});

export type LoginFormData = z.infer<typeof loginSchema>;
