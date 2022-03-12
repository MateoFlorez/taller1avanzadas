// TALLER 1 - EJERCICIO 4
let sables = [
    {color:"verde",energia:50,portador:"Obi Wan"},
    {color:"rojo",energia:20,portador:"Anakin"},
    {color:"amarillo",energia:30,portador:"Kit Fisto"},
    {color:"verde",energia:10,portador:"Qui-Gon"},
    {color:"rojo",energia:12,portador:"Ki-Adi Mundi"},
    {color:"amarillo",energia:60,portador:"Mace Windu"},
    {color:"verde",energia:19,portador:"Rey"},
    {color:"azul",energia:40,portador:"Ahsoka Tano"},
    {color:"verde",energia:12,portador:"Luke Skywalker"},
    {color:"rojo",energia:25,portador:"Yoda"},
    {color:"verde",energia:17,portador:"Boba Fett"},
    {color:"azul",energia:20,portador:"Chewbacca"},
    {color:"rojo",energia:17,portador:"Darth Vader"},
    {color:"verde",energia:40,portador:"Owen"},
    {color:"azul",energia:60,portador:"Chall"},
    {color:"verde",energia:70,portador:"Mateo Fell"},
    {color:"azul",energia:30,portador:"Rachel Mand"},
    {color:"rojo",energia:25,portador:"Tommy Adi"},
    {color:"morado",energia:22,portador:"Obi"},
    {color:"morado",energia:1,portador:"Wan"}
]

// Filtrado
let filtro = sables.filter(sable => sable.energia < 20)

console.log(filtro)