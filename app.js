const carrito = document.getElementById('div_carrito');
const btnAgregar = document.querySelectorAll('#btn_agregar');
const listaProducto = document.querySelectorAll('.div_info');
const btnVaciar = document.getElementById('btn_vaciar');
const btnProcesar = document.getElementById('btn_procesar');


// agregar al carrito
btnAgregar.forEach((botnPra)=>{
    botnPra.addEventListener('click',()=>{
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
    })
    botnPra.addEventListener('click', quicleada);
})

const lista = [];
const listaPrecios = []
function quicleada(e){
    const button = e.target;
    const item = button.closest('.div_info')
    const img = item.querySelector('.div_info img').src;
    const precios = item.querySelector('.div_info p').textContent;

    agregarContent(img,precios);
    lista.push({img,precios});
    listaPrecios.push(precios);
    guardarStorage(lista);
}
function agregarContent(img,precios){
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

// guardar productos en LS
function guardarStorage(lista){
    const guardarLocal = (clave,valor) =>{
        localStorage.setItem(clave,valor);   
    }
   guardarLocal("productos", JSON.stringify(lista));
   obtencionLS()
}

// obtencion del LS
function obtencionLS(){
    if ( localStorage.getItem('productos')) {
        const obtencion = JSON.parse(localStorage.getItem('productos'))
    }
}


// suma de los productos y lo muestra en carrito
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


// vaciar carrito
btnVaciar.addEventListener('click', vaciarCarrito);

function vaciarCarrito(){
    localStorage.clear('productos');
    document.querySelectorAll('.div_compra_realizada').forEach((e)=> e.remove());
    listaPrecios.splice(listaPrecios.lenght);
}