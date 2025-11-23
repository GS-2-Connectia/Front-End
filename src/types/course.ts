export interface Course {
    idCurso: string;
    idCarreira: number;
    idUsuario: number;
    idArea: number;
    nmCurso: string;
    dsCurso: string;
    tpConteudo: string;
    dtInicio: string;
    stsCurso: string;
}

//     ID_CURSO    NUMBER(6) NOT NULL,
//     ID_CARREIRA NUMBER(6) NOT NULL,
//     ID_USUARIO  NUMBER(5) NOT NULL,
//     ID_AREA     NUMBER(6) NOT NULL,
//     NM_CURSO    VARCHAR2(50) NOT NULL,
//     DS_CURSO    VARCHAR2(60) NOT NULL,
//     TP_CONTEUDO VARCHAR2(60) NOT NULL,
//     DT_INICIO   DATE,
//     STS_CURSO   CHAR(1) NOT NULL