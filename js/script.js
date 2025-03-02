let trs = document.querySelectorAll("tr")

//Notas do João Silva
let nota11 = parseInt(trs[1].children[2].textContent)
let nota12 = parseInt(trs[1].children[3].textContent)
let nota13 = parseInt(trs[1].children[4].textContent)
let nota14 = parseInt(trs[1].children[5].textContent)

 let media1 = (nota11 + nota12 + nota13 + nota14) / 4
 trs[1].children[6].textContent = media1


 //Notas da Maria Oliveira
let nota21 = parseInt(trs[2].children[2].textContent)
let nota22 = parseInt(trs[2].children[3].textContent)
let nota23 = parseInt(trs[2].children[4].textContent)
let nota24 = parseInt(trs[2].children[5].textContent)

 let media2 = (nota21 + nota22 + nota23 + nota24) / 4
 trs[2].children[6].textContent = media2


//Notas do Carlos Santos
let nota31 = parseInt(trs[3].children[2].textContent)
let nota32 = parseInt(trs[3].children[3].textContent)
let nota33 = parseInt(trs[3].children[4].textContent)
let nota34 = parseInt(trs[3].children[5].textContent)

 let media3 = (nota31 + nota32 + nota33 + nota34) / 4
 trs[3].children[6].textContent = media3


 ///Notas da Ana Lima
let nota41 = parseInt(trs[4].children[2].textContent)
let nota42 = parseInt(trs[4].children[3].textContent)
let nota43 = parseInt(trs[4].children[4].textContent)
let nota44 = parseInt(trs[4].children[5].textContent)

 let media4 = (nota41 + nota42 + nota43 + nota44) / 4
 trs[4].children[6].textContent = media4


 //Notas do Pedro Sousa
let nota51 = parseInt(trs[5].children[2].textContent)
let nota52 = parseInt(trs[5].children[3].textContent)
let nota53 = parseInt(trs[5].children[4].textContent)
let nota54 = parseInt(trs[5].children[5].textContent)

 let media5 = (nota51 + nota52 + nota53 + nota54) / 4
 trs[5].children[6].textContent = media5


 //Notas da Luana Costa
let nota61 = parseInt(trs[6].children[2].textContent)
let nota62 = parseInt(trs[6].children[3].textContent)
let nota63 = parseInt(trs[6].children[4].textContent)
let nota64 = parseInt(trs[6].children[5].textContent)

 let media6 = (nota61 + nota62 + nota13 + nota64) / 4
 trs[6].children[6].textContent = media6

//Notas do Fernando Rodrigues 
let nota71 = parseInt(trs[7].children[2].textContent)
let nota72 = parseInt(trs[7].children[3].textContent)
let nota73 = parseInt(trs[7].children[4].textContent)
let nota74 = parseInt(trs[7].children[5].textContent)

 let media7 = (nota71 + nota72 + nota73 + nota74) / 4
 trs[7].children[6].textContent = media7

 //Notas da Camila Pereira
let nota81 = parseInt(trs[8].children[2].textContent)
let nota82 = parseInt(trs[8].children[3].textContent)
let nota83 = parseInt(trs[8].children[4].textContent)
let nota84 = parseInt(trs[8].children[5].textContent)

 let media8 = (nota81 + nota82 + nota83 + nota84) / 4
 trs[8].children[6].textContent = media8

 //Notas da Rafela Martins
let nota91 = parseInt(trs[9].children[2].textContent)
let nota92 = parseInt(trs[9].children[3].textContent)
let nota93 = parseInt(trs[9].children[4].textContent)
let nota94 = parseInt(trs[9].children[5].textContent)

 let media9 = (nota91 + nota92 + nota93 + nota94) / 4
 trs[9].children[6].textContent = media9

 //Notas do Guilherme Almeida
let nota101 = parseInt(trs[10].children[2].textContent)
let nota102 = parseInt(trs[10].children[3].textContent)
let nota103 = parseInt(trs[10].children[4].textContent)
let nota104 = parseInt(trs[10].children[5].textContent)

 let media10 = (nota101 + nota102 + nota103 + nota104) / 4
 trs[10].children[6].textContent = media10

//Média atividade 1

trs[12].children[0].textContent = (nota11 + nota21 + nota31 + nota41 + nota51 + nota61 + nota71 + nota81 + nota91 + nota101) / 10
trs[12].children[1].textContent = (nota12 + nota22 + nota32 + nota42 + nota52 + nota62 + nota72 + nota82 + nota92 + nota102) / 10
trs[12].children[2].textContent = (nota13 + nota23 + nota33 + nota43 + nota53 + nota63 + nota73 + nota83 + nota93 + nota103) / 10
trs[12].children[3].textContent = (nota14 + nota24 + nota34 + nota44 + nota54 + nota64 + nota74 + nota84 + nota94 + nota104) / 10