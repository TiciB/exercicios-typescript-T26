function contadorDeOcorrencia(texto: string, letra: string): number {
    return texto.split(letra).length -1;
}
module.exports = contadorDeOcorrencia;