export interface User {
    idUsuario: number;
    idCarreira: number;
    nmUsuario: String;
    email: String;
    senha: String;
    tpPlano: String;

    // ID_USUARIO             NUMBER(5) NOT NULL,
    // ID_CARREIRA            NUMBER(6) NOT NULL,
    // NM_USUARIO             VARCHAR2(70) NOT NULL,
    // DS_EMAIL               VARCHAR2(60) NOT NULL,
    // DS_SENHA               VARCHAR2(30) NOT NULL,
    // TP_PLANO               VARCHAR2(9) NOT NULL
}