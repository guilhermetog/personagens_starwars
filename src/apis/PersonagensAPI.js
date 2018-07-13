
//Função para coletar a lista de Personagens
export const getPersonagens =(address, callback)=>{
    fetch(address)
    .then(res =>{
        if(!res.status === "OK") throw new Error()
        return res.json()
    })
    .then(result =>{
       callback(result)
    })
}