// registro de formulario
const formulario = document.getElementById('formulario');
const btnEnviar = document.getElementById('boton_form')
const inputs = document.querySelectorAll('#formulario input')
class persona{
    constructor(nombre,apellido,gmail,telefono,contraseña){
        this.nombre = nombre;
        this.apellido = apellido;
        this.gmail = gmail;
        this.telefono = telefono;
        this.contraseña = contraseña;
    }
}



btnEnviar.addEventListener('click', enviar);

function enviar(event){
    event.preventDefault()
    const registrados = new persona (inputs[0].value,inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value);
    
    // Operador ternario
    maxCar() === true && minCar() === true && maxNum() === true && valEmail() === true ? console.log(`El nombre es: ${registrados.nombre} El appelido es: ${registrados.apellido} El email es: ${registrados.gmail} El telefono es: ${registrados.telefono} La contraseña es: ${registrados.contraseña}`) : maxCar();
    minCar();maxNum();valEmail();
}

// maximo de caracteres en nombre y apellido
function maxCar(){
    let  i = inputs;
    if (i[0].value.length < 30 && i[1].value.length < 30 && i[0].value.length > 0 && i[1].value.length > 0){
        return true
    }else{
        Swal.fire({
            iconColor: '#aa0000cc',
            confirmButtonColor: '#333333aa',
            background: '#111111aa',
            color: '#ccc',
            icon: 'error',
            title: 'Oops...',
            text: 'maximo 30 caracteres',
          })
    }
}

// minimo de caracteres en contraseña
function minCar(){
    let i = inputs[4];
    if(i.value.length > 8){
       return true
    }else{
        Swal.fire({
            iconColor: '#aa0000cc',
            confirmButtonColor: '#333333aa',
            background: '#111111aa',
            color: '#ccc',
            icon: 'error',
            title: 'Oops...',
            text: 'minimo 8 caracteres',
          })
    }
}

//Solo permite 10 numeros para el telfono o celular
function maxNum(){
    let i = inputs[3];
    if(i.value.length === 10){
        return true
    }else{
        Swal.fire({
            iconColor: '#aa0000cc',
            confirmButtonColor: '#333333aa',
            background: '#111111aa',
            color: '#ccc',
            icon: 'error',
            title: 'Oops...',
            text: 'solo se permiten 10 numeros',
          })
    }
}

// validacion de gmail
function valEmail(){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let esValido = expReg.test(inputs[2].value);
    if (esValido===true){
        return true
  }else{
    Swal.fire({
        iconColor: '#aa0000cc',
        confirmButtonColor: '#333333aa',
        background: '#111111aa',
        color: '#ccc',
        icon: 'error',
        title: 'Oops...',
        text: 'email incorrecto',
      })
     }
}