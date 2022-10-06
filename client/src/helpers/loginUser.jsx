import axios from 'axios'


const url = 'http://localhost:5001/login/'

export async function login(uname, password){
    let data ={ uname, password}

    // Abfrage an den Server
    try{
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })

        // const result = await axios.post(url, data, {
        //         headers: {
        //             Accept: "application/json",
        //             "Content-Type": "application/json",
        //         }});

    }catch(error){
        console.log('Something went wrong: ',error)
    }
}