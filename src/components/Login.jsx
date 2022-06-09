import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import Alert from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom'

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [formAlert, setFormAlert] = useState({
    message: 'There is no message',
    variant: 'danger',
    active: false
  })

  function showFormAlert(message, variant="danger") {
    setFormAlert({
        message: message,
        variant: variant,
        active: true
    })
    setTimeout(() => setFormAlert(prevState => {
        return {
            ...prevState,
            active: false
        }
    }), 5000)
  }

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
    const { email, password } = form
    // No empty fields
    if (email == '' || password == '') {
      showFormAlert('Há campos em branco')
      return
    }
    // Send to API (TODO)
    console.log(form)
  }

  return (
    <div className='p-3'>
        <h2>Login</h2>
        <Form>
            { formAlert.active && <Alert variant={formAlert.variant}>{formAlert.message}</Alert>}
            <FormGroup className='mb-3' controlId="email">
                <FormLabel>Email da sua conta: </FormLabel>
                <FormControl 
                  type="email" 
                  placeholder="Seu email" 
                  onChange={e => handleChange(e)}
                  name="email"
                  value={form.email}
                />
            </FormGroup>
            <FormGroup className='mb-3' controlId="password">
                <FormLabel>Senha: </FormLabel>
                <FormControl 
                  type="password" 
                  placeholder="Sua senha" 
                  onChange={e => handleChange(e)}
                  name="password"
                  value={form.password}
                />
            </FormGroup>
            <Button variant="primary" type="submit" onClick={e => handleSubmit(e)}>Logar</Button>
            <Link to="/" className='btn btn-outline-dark ms-2'>Go back</Link>
        </Form>
    </div>
  )
}

export default Login