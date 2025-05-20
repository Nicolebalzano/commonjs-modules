import names from "./names"
import hobbies from "./hobbies"
//  Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: 
//  fullName ed hobbies.
//   All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto
function people() {
return {
    fullName : names(),
    hobbies : hobbies()
}
}