import names from "./names.js"
import hobbies from "./hobbies.js"

const userFullName = names("Nicole", "Balzano");
const userHobbies = hobbies("leggere", "coding", "animali")
function people() {
return {
    fullName : userFullName ,
    hobbies : userHobbies
}
}
export  default people;