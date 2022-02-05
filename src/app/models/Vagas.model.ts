export class Vaga {
    id: number = 0;
    descricao: string = "";
    reqObrigatorios: string = "";
    reqDesejaveis: string = "";
    remuneracao: number = 0;
    beneficios: string = "";
    local: string = "";

    constructor(
        id: number,
        descricao: string,
        reqObrigatorios: string,
        reqDesejaveis: string,
        remuneracao: number,
        beneficios: string,
        local: string) {
        this.id = id;
        this.descricao = descricao;
        this.reqObrigatorios = reqObrigatorios;
        this.reqDesejaveis = reqDesejaveis;
        this.remuneracao = remuneracao;
        this.beneficios = beneficios;
        this.local = local;
    }
}