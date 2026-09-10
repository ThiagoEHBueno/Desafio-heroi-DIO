let heroi = ["Thiago", 15000]

if (heroi[1] < 1000) 
    XP = "Ferro"
else if (heroi[1] < 2000) 
    XP = "Bronze"
else if (heroi[1] < 5000)
    XP = "Prata"
else if (heroi[1] < 7000)
    XP = "Ouro"
else if (heroi[1] < 8000)
    XP = "Platina"
else if (heroi[1] < 9000)
    XP = "Ascendente"
else if (heroi[1] < 10000)
    XP = "Imortal"
else 
    XP = "Radiante"

console.log(`O herói de nome ${heroi[0]} está no nível de ${XP}`)