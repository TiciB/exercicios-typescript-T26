function criaObjeto(data: string): object {
    const [dia, mes, ano] = data.split("/");

    return {
        dia: dia,
        mes: mes,
        ano: ano
    };
}
module.exports = criaObjeto;