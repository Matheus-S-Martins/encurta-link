// buscar links salvos
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves
}


//salvar um link no localStorage
export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log('Esse link já existe')
        return
    }

    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Salvo com sucesso')

}



//deletar algun link salvo 
export function deleteLink(links, id){
    let myLinks = links.filter(item =>{
        return(item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));

    return myLinks;
}