let nivel = [
  "Ferro",
  "Bronze",
  "Prata",
  "Ouro",
  "Platina",
  "Ascendente",
  "Imortal",
  "Radiante",
];

let exitProgram = "2"; // começa com "2" para entrar no loop

do {
  let nome = prompt("Olá Herói! Qual o seu nome?");
  let quantityXp = parseInt(prompt("Qual a quantidade de XP? (1000 à 10000)"));

  if (quantityXp < 1000) {
    alert(`O Herói de nome ${nome} está no nível de ${nivel[0]}`);
  } else if (quantityXp >= 1000 && quantityXp <= 2000) {
    alert(`O Herói de nome ${nome} está no nível de ${nivel[1]}`);
  } else if (quantityXp >= 2001 && quantityXp <= 5000) {
    alert(`O Herói de nome ${nome} está no nível de ${nivel[2]}`);
  } else if (quantityXp >= 5001 && quantityXp <= 7000) {
    alert(`O Herói de nome ${nome} está no nível de ${nivel[3]}`);
  } else if (quantityXp >= 7001 && quantityXp <= 8000) {
    alert(`O Herói de nome ${nome} está no nível de ${nivel[4]}`);
  } else if (quantityXp >= 8001 && quantityXp <= 9000) {
    alert(`O Herói de nome ${nome} está no nível de ${nivel[5]}`);
  } else if (quantityXp >= 9001 && quantityXp <= 10000) {
    alert(`O Herói de nome ${nome} está no nível de ${nivel[6]}`);
  } else {
    alert(`O Herói de nome ${nome} está no nível de ${nivel[7]}`);
  }

  
} while (exitProgram === "2");
exitProgram = prompt("Quer verificar outro herói?\n1 - NÃO (sair)\n2 - SIM (continuar)");
