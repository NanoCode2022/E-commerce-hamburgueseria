const produc = [];
const recoleccion = async ()=>{
    const resp = await
    fetch('../json/ensalada.json')
    const data = await resp.json()
    produc.push(...data)

    obtencionPrecios()
}
recoleccion();
console.log(produc);