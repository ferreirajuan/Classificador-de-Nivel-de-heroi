let nome = prompt("Informe o nome do herói: ");
let xp = Number(prompt("Informe o XP: "));

if (xp === 1000) {
    alert(`O Herói de nome ${nome} está no nível de Ferro`);
} else if (xp >= 1001 && xp <= 2000) {
    alert(`O Herói de nome ${nome} está no nível de Bronze`);
} else if (xp >= 2001 && xp <= 5000) {
    alert(`O Herói de nome ${nome} está no nível de Prata`);
} else if (xp >= 6001 && xp <= 7000) {
    alert(`O Herói de nome ${nome} está no nível de Ouro`);
} else if (xp >= 7001 && xp <= 8000) {
    alert(`O Herói de nome ${nome} está no nível de Platina`);
} else if (xp >= 8001 && xp <= 9000) {
    alert(`O Herói de nome ${nome} está no nível de Ascendente`);
} else if (xp >= 9001 && xp <= 10000) {
    alert(`O Herói de nome ${nome} está no nível de Imortal`);
} else {
    alert(`O Herói de nome ${nome} está no nível de Radiante`);
}
