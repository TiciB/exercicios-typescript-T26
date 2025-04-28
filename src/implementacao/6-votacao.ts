function apuraVotacao(votos: Array<number>): string {
    let voto1 = 0
    let voto2 = 0
    let voto3 = 0

    for(let voto of votos){
        if (voto === 1){
            voto1++;
        }else if(voto === 2){
            voto2++;
        }else if (voto ===3){
            voto3++;
        }
    }

    if(voto1 > voto2 && voto1 > voto3){
        return "Vencedor: 1";
    }else if(voto2 > voto1 && voto2 > voto3){
        return "Vencedor: 2";
    }else if(voto3 > voto1 && voto3 > voto2){
        return "Vencedor: 3";
    }else{
        return "Empate"
    }
}
module.exports = apuraVotacao;