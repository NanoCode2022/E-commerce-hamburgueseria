const productos = [];

const peticion = async ()=>{
    const resp = await
    fetch('../json/hamburguesa.json')
    const data = await resp.json()
    productos.push(...data)
    imprimirProductos()
}
peticion();
