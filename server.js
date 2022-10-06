import express from 'express'
import {Low, JSONFile} from 'lowdb'
import { loginUser } from './controller/userController.js'
import cors from 'cors'

// Server initialisieren
const PORT = 5001
const app = express()
app.use(express.json())
app.use(cors({origin: '*'}))


// Routen
app.get('/', (req, res) =>{
    res.json('Hallo Welt')
})

app.post('/login', loginUser )


app.listen(PORT, () => console.log(`Server läuft unter ${PORT}`))
