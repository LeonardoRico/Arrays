/*crear arrelos usando funciones tipo flecha, usar metodos de arreglos vistos y 
mostrar resultados,siempre usando callbackfn,para cada arreglo minimo un metodo (4)*/

/*-----------------------------Solucion------------------------------ */

let namePet = ["paco", "linda", "pepe", "star"];
//la funcion permite encontrar un elemento que inicia con la letra "l"
let element = namePet.find(pet=>{return pet.startsWith("l")})
console.log(element);

//busca entre los elementos el requerido y cambia su valor
let selected = namePet.forEach(pet=>{
    pet==="paco"? pet = "rabit": stop;
    console.log(pet);
});

let varios = ["casa", 10, "carro", 563, true, "avion"];
let ages = [8, 5, 45, 32, 15, 67, 63, 78, 9, 3, 1, 10, 16, 18];
//nos muestra cuáles de los elementos del array son un string (true/false)
let cosas = varios.map(obj=>{
    return typeof obj === "string";
});console.log(cosas);
console.log(varios);

//la función permite crear un array con las edades que cumplen el filtro
let mayoresEdad = ages.filter(edad=>{
    return edad>=18;
}); console.log(mayoresEdad);
console.log(mayoresEdad.sort()); //ordena de manera ascendente el arreglo

/*retorna un booleano al validar una condicion en cada elemento del array y retorna true si 
cada uno cumple con la valiadación*/
let edadGeneral = ages.every(age=>{
    return age >= 18;
}); console.log(edadGeneral);

//verifica que todos los elementos de un array sean de un mismo tipo de dato y retorna si es vedadero 
//o falso
let dateType = ages.every(age=>{
    return typeof age === 'number';
}); console.log(dateType);
