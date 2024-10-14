
# Fundamentos

Ejercicios con JavaScript


## Authors

- [@RodArielX](https://github.com/RodArielX/fundamentos_practica.git)


//VARIABLES
    //Tipos Simples

        // Entero
        let cantidad_producto=4
        //Float
        let precio_vitamina=16.99
        //String
        let nombre_producto="Redoxon Total Tabletas Efervescentes T/30"
        //Boolean
        let stock = true
        // Char
        let tipo_vitamina='D'
        //Undefined
        let data5 = undefined 
  //Tipos Compuestos
  
        //Array
        let compra= ['Redoxon Total Tabletas Efervescentes T/30',4,true]
        //Objeto
        let stock_producto={                    
            descripcion:"Redoxon Total Tabletas Efervescentes T/30",
            stock:true,
            cantidad:4,
            tipo_vitamina:'D'
        }
![image](https://github.com/user-attachments/assets/60820135-4d71-4e66-aa82-9d34ca2f8c36)

//STRINGS - Cadena de Caracteres
    let nombre_jabon="Serum Effaclar Ultra Concentre Piel Grasa 30ML Unidad"
//PROPIEDADES - Va seguido de un punto 
    console.log(nombre_jabon.length)
//MÉTODOS - Son los que son seguidos por un parentesis, requieren en algunos casos un parametro
    console.log(nombre_jabon.trim()); //borra los espacios en blanco metodo trim
    console.log(nombre_jabon.includes('20Mg')); //indica si ese caracter esta incluido 
    console.log(nombre_jabon.toUpperCase()); //convierte en mayusculas
    console.log(nombre_jabon.toLocaleLowerCase()); //convierte en minisculas
//ES6 - NUEVAS CARACTERISTICAS
//Template Strings - Mezcla texto con variable ${}
        console.log(`El producto a enviar es: ${nombre_jabon}`)    
//Casting - Suma entre stings y numeros 
        let precio1="16.99"
        let precio2=42.77
        console.log(+precio1+precio2) //(+) transforma el string en float o entero
        //Operador Ternario
        let valor_total=50.49
        let valor_cobrado=51

        let envio = valor_cobrado <= valor_total ? "Dar Cambio" : "El saldo es insuficiente para la compra"
![image](https://github.com/user-attachments/assets/119e6651-b0a9-42f5-9838-b0102d196d7c)


        //Ingreso a la cuenta Club-Fybeca
        let email_clubFybeca
        !email_clubFybeca ? console.log("Ingrese un correo") : console.log("Correo Correcto"); 
            //Registro de Clientes
            let cliente_ID = 1751086628
            cliente_ID === "1751086628    00" ? console.log("Cliente Registrado") : console.log("Continue con su registro");
![image](https://github.com/user-attachments/assets/3123c75d-e115-470f-bf1d-1be272667aea)

    //Loops
    const lista = ['Serum Effaclar Ultra Concentre Piel Grasa 30 Ml Unidad', 'Ensure Advance Vainilla T 850G', 'Eucerin Sun Kids Geltoque Seco Spf50 200Ml']

    lista.forEach((compra)=>{console.log(compra)})

    const lista_compra = lista.map((compra)=>{compra.toUpperCase()})
    console.log(lista);
    console.log(lista_compra)
![image](https://github.com/user-attachments/assets/c9bfba23-495e-425c-b707-9963b730bba4)
![image](https://github.com/user-attachments/assets/323cfe16-d48f-41d1-a844-58c1fd35e911)
![image](https://github.com/user-attachments/assets/99c5aa16-495b-49db-8183-6a9dd743bdca)
    //Funcion Anonima y Autoejecutada
    /*(function(){
        console.log("Ejecucion de una funcion");
    })()*/

    //FUNCION EXPRESADA - Almacena en una variable la informacion 
    const conectionBDD = function (){
        console.log("Conexion exitosa"); 
    } 
    conectionBDD()

    //ARGUMENTOS
        //Ingreso a la cuenta Club-Fybeca
    const validarEmailAndPassword = function(email, password){
        console.log(`La contraseña ${password} y el email es ${email} incorrecto`)
    }

    validarEmailAndPassword('ariel.ashqui@epn.edu.ec','Ariel123')

    //ARGUMENTOS OPCIONALES
    const validarEmailAndPassword2 = function(email, password="Ariel123" ){
        console.log(`La contraseña ${password} y el email es ${email} incorrecto`)
    }

    validarEmailAndPassword2('ariel.ashqui@epn.edu.ec')
    //Retorno - Hay varios tipos 
    function tiposRetorno(){
        //Logica
        //return "Usuario premium"
        //return 25
        //return true
        //return 88.4
        //return{'user1','user2'}
        return{
            name:"Juan",
            id:854
        }
    }
    tiposRetorno()
    //Arrow Function - Almacena la informacion en una variable
    const conectionBDDMongo =  () =>{
        console.log("Conexion exitosa"); 
    } 
    conectionBDDMongo()

    const registerUser = (email) => {console.log("User registrado")
    registerUser('ariel.ashqui@epn.edu.ec')
    }
    //Objetos
        //Usado para las fichas técnicas en los productos
    const ficha_tecnica= {
        nombre_suplemento:"Ensure Advance Vainilla T 850G",
        marca:"Ensure",
        genero:"Unisex",
        ml:850,
        recomendacion:{
            adultos:"Si",
            adultos_mayores:"SI"
        },
        Advertencia:['Temperatura ambiente','Fuera del alcance de los niños','Lugar fresco y seco'],
        stock:true
    }
    //Presentacion de las fichas técnicas
    console.log(ficha_tecnica.nombre_suplemento);
    console.log(ficha_tecnica.ml);
    console.log(ficha_tecnica.Advertencia);
    //Otra forma de llamar 
    const nameB = ficha_tecnica.nombre_suplemento
    const ml1 = ficha_tecnica.ml

    //ES6
    //DESESTRUCTURACION
    const {nombre_suplemento,marca,genero,ml,stock:cantidad_stock} = ficha_tecnica
    console.log(genero);
    console.log(cantidad_stock);

    // Propiedades
    ficha_tecnica.photo = '/Desarrollo de App Web/Semana2/LogoFybeca.PNG'
    delete ficha_tecnica.Advertencia

    console.log(ficha_tecnica);

    Object.values(ficha_tecnica).includes("") ? console.log("Error") : console.log("Ok");
  ![image](https://github.com/user-attachments/assets/ca645d6a-cfea-467d-8195-9aba92ca98d4)

  ![image](https://github.com/user-attachments/assets/599b1a5d-3258-4e78-aa95-756876e2cf3a)


    const vitamina ={
        nombreV:"Redoxon Total Tabletas Efervescentes T/30",
        precioV:16.99
    }
![image](https://github.com/user-attachments/assets/244b0f7a-4a9a-4c3b-a289-324586bf08b6)

    const jabon ={
        nomreJ:"Serum Effaclar Ultra Concentre Piel Grasa 30 Ml Unidad",
        precioJ:42.77
    }
![image](https://github.com/user-attachments/assets/ba528dc4-1ae6-49b9-a6ed-25934c9ae42f)

    const orderUser = {...vitamina,...jabon}

    console.log(orderUser)

    // ES6 - Nombres abreviados de propiedades
        //productos de Fybeca
    const nameProducto1 = "Redoxon Total Tabletas Efervescentes T/30"
    const priceProducto1 = 16.99

    const pedido_Solicitado ={
        nameProducto1,
        priceProducto1
    }

    console.log(pedido_Solicitado);
![image](https://github.com/user-attachments/assets/7380ebd7-abb8-41a2-972b-9eb3d9e27f5e)
