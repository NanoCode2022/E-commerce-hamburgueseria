const productos = [];

const peticion = async ()=>{
    const resp = await
    fetch('../json/hamburguesas.json')
    const data = await resp.json()
    productos.push(...data)
    imprimirProductos()
}
peticion();
