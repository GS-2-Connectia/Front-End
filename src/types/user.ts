import type { Area } from "./area";
import type { CareerProps } from "./career"

export interface UserProps {
    id: number;
    nome: String;
    email: String;
    senha: String;
    carreira: CareerProps;
    tipoPlano: String;
    area: Area;

    // private int idUsuario;
    // private String nome;
    // private String email;
    // private String senha;
    // private Carreira carreira;
    // private String tipoPlano;
    // private Area area;
}