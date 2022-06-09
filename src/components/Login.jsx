import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import { Link } from 'react-router-dom'

function Login() {
  const [form, setForm] = useState({
    login_nome: '',
    login_senha: ''
  })

  function handleChange(event) {
    const target = event.target
    setForm(prevState => {
      return {
        ...prevState,
        [target.name]: target.value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    // Send to API (TODO)
    console.log(form)
  }

  return (
    <div className='p-3'>
        <h2>Login</h2>
        <Form>
            <FormGroup className='mb-3' controlId="login_nome">
                <FormLabel>Nome de usuário: </FormLabel>
                <FormControl 
                  type="text" 
                  placeholder="Seu nome de usuário" 
                  onChange={e => handleChange(e)}
                  name="login_nome"
                  value={form.login_nome}
                />
            </FormGroup>
            <FormGroup className='mb-3' controlId="login_senha">
                <FormLabel>Senha: </FormLabel>
                <FormControl 
                  type="password" 
                  placeholder="Sua senha" 
                  onChange={e => handleChange(e)}
                  name="login_senha"
                  value={form.login_senha}
                />
            </FormGroup>
            <Button variant="primary" type="submit" onClick={e => handleSubmit(e)}>Logar</Button>
            <Link to="/" className='btn btn-outline-dark ms-2'>Go back</Link>
        </Form>
    </div>
  )
}

export default Login