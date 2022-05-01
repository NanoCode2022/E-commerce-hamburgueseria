const inputFiltro = document.getElementsByClassName('input_filtro');
const optionFiltro = document.getElementsByClassName('option_filtro');
const buttonFiltro = document.getElementById('button_filtro');
console.log(inputFiltro);
console.log(optionFiltro);

buttonFiltro.addEventListener('click', ()=>{
    const valorMinimo = inputFiltro[0].value;
    const valorMaximo = inputFiltro[1].value;
    obtencionPrecios(valorMinimo,valorMaximo)
    console.log(valorMaximo +' ' + valorMinimo)
})

function obtencionPrecios(valorMinimo,valorMaximo){
    const resul = produc.filter(p => p.precio >= valorMinimo && p.precio <= valorMaximo,0);
    console.log(resul);
    const contenedor = document.getElementById('div_container');
    for (let i = 0; i < resul.length; i++) {
        const element = resul[i];
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
    for (let i = 0; i < boton.length; i++) {
    const element = boton[i];
    element.addEventListener('click', agragarAlCarrito);
    }
}
