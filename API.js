export function getFacturesById1() {
    const url = 'http://192.168.43.213:35839/Facturation/api/production/facture'
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))     
}
export function getFacturesById(id) {
    const url = 'http://192.168.43.213:35839/Facturation/api/production/facture/'+id
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}   
      
