function numerosArmstrong(numero: number): string {
    let quantidadeDeAlgarismos: number = 0;
    let copiaDoOriginal: number = numero;

    while(copiaDoOriginal > 0){
        quantidadeDeAlgarismos = quantidadeDeAlgarismos + 1;
        copiaDoOriginal = (copiaDoOriginal - (copiaDoOriginal % 10)) / 10;
    }

    let soma: number = 0;
    copiaDoOriginal = numero;

    while(copiaDoOriginal > 0){
        let algarismo: number = copiaDoOriginal % 10;

        let potencia: number = 1;
        let contador: number = 0
        while(contador < quantidadeDeAlgarismos){
            potencia = potencia * algarismo;
            contador = contador + 1;
        }

        soma = soma + potencia;
        copiaDoOriginal = (copiaDoOriginal - (copiaDoOriginal % 10)) / 10;
    }

    if(soma === numero){
        return "Este eh um numero de Armstrong!"
    }else{
        return "Este nao eh um numero de Armstrong!"
    }
}
module.exports = numerosArmstrong;