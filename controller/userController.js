import {Low, JSONFile} from 'lowdb'

// Datenbank initialisieren
const adapter = new JSONFile('./data/userDb.json')
const db = new Low(adapter)
await db.read()



export function loginUser(req, res){
    const {uname, password} = req.body // Daten aus dem Frontend
    console.log('Uname: ', uname, 'password: ', password)
    const user = db.data.find((el) => el.uname === uname) // Daten aus der Datenbank
    if (user && user.password==password){
        const responseObjekt = {isAdmin: user.isAdmin, id: user.id}
        res.json(responseObjekt) 

    }else {
        res.status(418).send({message: 'wrong'})
    }

}