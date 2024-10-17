
# ARREGLOS - OBJETOS

Ejercicios con JavaScript


## Authors

- [@RodArielX](https://github.com/RodArielX/fundamentos_practica.git)

// PRACTICA - LABORATORIO

// ARIEL ASHQUI

// FUNDAMENTOS


const cartelera = ['Venom 3','Sonrie2','Joker 2','BeetleJuice','La Sustancia']
const carteleraTodoPublico = ['Un panda en Africa','Misfit','El Candidato Honesto','Aventuras Caninas','My Hero Academia','Robot Salvaje']
// spread operator
const carteleraCompleta = [...cartelera,...carteleraTodoPublico]
console.log(carteleraCompleta);

console.log("Número de elementos:", cartelera.length);
console.log("Número de elementos:", carteleraTodoPublico.length);

![image](https://github.com/user-attachments/assets/8ecb11b6-ac77-49af-8edc-33fbf99467ef)

// ATRAVESANDO

const promociones = ["Vaso Marvel","Vaso Proyector Wish","Vaso Aquaman","Bucket Aquaman"]

// primera forma de iterar sobre los elementos de un arreglo 
for (let i=0 ; i<promociones.length ; i++){
    console.log(promociones[i]);
}

// segunda forma de iterar sobre los elementos de un arreglo 
promociones.forEach((e,i)=>console.log(`${i} - ${e}`))

// tercera forma de iterar sobre los elementos de un arreglo 
const nuevasPromociones= promociones.map((e)=> `Muchas gracias por adquirir el ${e}`)
console.log(promociones);
console.log(nuevasPromociones);
// En conclusión (map) no altera el arreglo original

![image](https://github.com/user-attachments/assets/9fbee61a-1f8c-47e1-885b-bfb7a43bca45)

const snacks = [
    {
        tipo:"Salsa",
        nombre:"Salsa Extra Queso",
        precio: 1.90
    },
    {
        tipo:"Bebida Grande",
        sabor:"Pepsi",
        precio: 3.90
    }
]
snacks.forEach(snack => console.log(`${snack.tipo} - ${snack.precio}`))

![image](https://github.com/user-attachments/assets/e8eeb6e7-7c1d-4ede-bef5-6df819de956e)

// METODOS

const dulces = ["Galak 90Gr","Crunch 90Gr","M&M Milk Chocolate"]

dulces.length >= 3 ? console.log("Dulces actualizados con éxito") : console.log("No se puede actualizar la lista de dulces")

dulces.push("Kinder Joy")         // Inserta un elemento al final del arreglo
dulces.unshift("Bombom Ferrero Rocher X3")        // Inserta un elemento al inicio del arreglo
// dulces.pop()            // Elimina el elemento final del arreglo
// dulces.shift()          // Elimina el elemento inicial del arreglo

console.log(dulces)

let resultadoDulces = dulces.find(dulce => (dulce === "Galak 90Gr")) //Cuando se utilice el find se debe utilizar el return

resultadoDulces ? console.log("Valor a cancelar") : console.log("No tenemos en stock el dulce deseado")

let filtrarDulce = dulces.filter((dulce) => (dulce.startsWith("G")))  // Filter permite filtrar los elementos del arreglo
console.log(resultadoDulces)

![image](https://github.com/user-attachments/assets/ce158855-5f77-47a4-8a31-433f07d05bf4)
![image](https://github.com/user-attachments/assets/80b4afd6-0e6b-4deb-9e2f-0f7ff9a5e2b3)


// DESESTRUCTURACION

const combosCine = {
    nombre: "Combo 1",
    detalles: '1 canguil mediano + 1 bebida 32oz + 1 hot dog',
    precio: 9.75
};
  
const { nombre, detalles, precio } = combosCine;
console.log(`Usted ha adquirido el ${nombre} que viene incluido ${detalles} al precio de ${precio}`);

![image](https://github.com/user-attachments/assets/69acf2b1-8844-4105-ba35-e778198bd423)

// REST

'use strict';

const [bebidaGrande, CocaColaLight, ...rest] = ['Gaseosa de 44oz', 'Coca Cola Light en botella 500ml', 'Agua con gas en botella 500ml', 
    'Gaseosa de 32oz', 'Agua en Botella 600ml']

console.log(bebidaGrande)
console.log(CocaColaLight)
console.log(rest)

![image](https://github.com/user-attachments/assets/03bbba34-2d45-478d-b0a5-8161852638d1)
