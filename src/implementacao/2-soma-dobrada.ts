function somaDobrada(num1: number, num2: number): number {
    
if (num1 < 1 || num2 < 1) {
    return -1;
}
else if (num1 === num2) {
    return (num1 + num2)*2;
}
else {
    return num1 + num2;
}
}
module.exports = somaDobrada;