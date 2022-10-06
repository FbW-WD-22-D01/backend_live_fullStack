import React, {useState} from 'react'
import { login } from '../helpers/loginUser'

function Login() {
  
  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    const result = await login(username, pass)
  }

  return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
          <label htmlFor="user">Username</label>
          <input type="text" id='user' onChange={(e) => setUsername(e.target.value)} value={username} />
          <label htmlFor="pass">Password</label>
          <input type="password" id='pass' onChange={(e) => setPass(e.target.value)} value={pass} />
          <button>Login</button>
        </form>
    </div>
  )
}

export default Login