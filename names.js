// 1. Crea una funzione che accetta due parametri:
//  firstName, lastName. La funzione dovrebbe restituire 
// un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.
function names(firstName, lastName){
    return {
        firstName,
        lastName
    }
}
// console.log(names(Nicole, Balzano))
export default names;