function imprimirProductos(){
    const contenedor = document.getElementById('div_container')
    for (let i = 0; i < productos.length; i++) {
        const element = productos[i];
        const {src,btn,precio} = element;
        const creado = document.createElement('div');
        creado.className = 'div_info';
        const carta =  `
        <img src="${src}" alt="" class="img_hambur">
        <div id="btn_agregar" class="btnAgregar">${btn}</div>
        <p class="precios">${precio}</p>`;
        creado.innerHTML = carta;
        contenedor.append(creado)
    }    
    const boton = document.getElementsByClassName('btnAgregar');
    console.log(boton)

    for (let i = 0; i < boton.length; i++) {
    const element = boton[i];
    element.addEventListener('click', agragarAlCarrito);
}
}



function agragarAlCarrito(e){
    const button = e.target;
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 800,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        background: '#11111199',
        color: '#ddd',
        icon: 'success',
        iconColor: '#2E6454',
        title: 'Agregado al Carrito'
      })    
      guardando(button)
}
const lista = [];
const listaPrecios = [];
function guardando(button){
    const item = button.closest('.div_info');
    const img = item.querySelector('.div_info img').src;
    const precios = item.querySelector('.div_info p').textContent;
    imprimirCarrito(img,precios);
    lista.push({img,precios});
    listaPrecios.push(precios)
    guardarLS(lista);
}

const carrito = document.getElementById('div_carrito');

function imprimirCarrito(img,precios){
    const row = document.createElement('div');
    const content = `
    <div class="div_compra_realizada">
    <img src="${img}" alt="" class="img_compra_realizada">
    <p class="precios_realizados">$${precios}</p>
    </div>
    `;
    row.innerHTML = content;
    carrito.append(row)
}
function guardarLS(lista){
    const guardarLocal = (clave,valor) =>{
        localStorage.setItem(clave,valor);   
    }
   guardarLocal("compra", JSON.stringify(lista));
   obtencionLS();
}


function obtencionLS(){
    const obtencion = JSON.parse(localStorage.getItem('compra') || [])
}



const btnProcesar = document.getElementById('btn_procesar');

btnProcesar.addEventListener('click', sumaTotal);

function sumaTotal(){
    const compra = [];
    for(const e of listaPrecios){
    compra.push(Number(e));
   }
    const total = compra.reduce((a,v)=> a + v,0);
    precioEnCarrito(total)
}

function precioEnCarrito(total){
    const totalPrecio = document.getElementById('precio_compra_p');
    totalPrecio.innerHTML = `$${total}`;
}

const btnVaciar = document.getElementById('btn_vaciar');
// vaciar carrito
btnVaciar.addEventListener('click', vaciarCarrito);

function vaciarCarrito(){
    localStorage.clear('compra');
    document.querySelectorAll('.div_compra_realizada').forEach((e)=> e.remove());
    listaPrecios.splice(listaPrecios.lenght);
}



