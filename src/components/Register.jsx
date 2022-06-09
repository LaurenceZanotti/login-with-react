import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

function Register() {
    const [form, setForm] = useState({
        email: '',
        name: '',
        password: '',
        password2: ''
    })

    const [formAlert, setFormAlert] = useState({
        message: 'There is no message',
        variant: 'danger',
        active: false
    })

    const [isLoading, setIsLoading] = useState(false)

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
        // Bind form
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
        const {email, name, password, password2} = form
        console.log(name);

        // No empty fields
        if (email == '' || password2 == '' || password == '' || name == '') {
            showFormAlert('Há campos em branco')
            return
        }

        // Check if password confirmation is valid
        if (password != password2) { 
            showFormAlert('Senhas não conferem')
            return
        }
        
        // Send account details to API (TODO)
        let status_code = 0
        const register_endpoint = '/api/auth/register'
        fetch(`http://localhost:5000${register_endpoint}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password,
                "password2": password2
            })
        })
            .then(res => {
                status_code = res.status
                return res.json()                
            })
            .then(data => {
                console.log(data)
                if (status_code = 400) {
                    showFormAlert(`${data.auth}`, 'warning')
                    return
                }
                showFormAlert(`Seja bem vindo ${form.name}!`, 'success')
            })
            .catch(err => {
                console.error(err)
                showFormAlert('Algo deu errado')
            })
    }

    return (
        <div className='p-3'>
            <h2>Registrar</h2>
            <Form>
                { formAlert.active && <Alert variant={formAlert.variant}>{formAlert.message}</Alert>}
                <FormGroup className='mb-3' controlId="email">
                    <FormLabel>Seu melhor e-mail: </FormLabel>
                    <FormControl 
                        type="email" 
                        placeholder="Seu e-mail" 
                        onChange={e => handleChange(e)} 
                        name="email" 
                        value={form.email} 
                    />
                </FormGroup>
                <FormGroup className='mb-3' controlId="name">
                    <FormLabel>Nome de usuário: </FormLabel>
                    <FormControl 
                        type="text" 
                        placeholder="Seu nome de usuário" 
                        onChange={e => handleChange(e)} 
                        name="name" 
                        value={form.name} 
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
                <FormGroup className='mb-3' controlId="password2">
                    <FormLabel>Confirme sua senha: </FormLabel>
                    <FormControl 
                        type="password" 
                        placeholder="Sua senha" 
                        onChange={e => handleChange(e)} 
                        name="password2" 
                        value={form.password2} 
                    />
                </FormGroup>
                <Button variant="primary" type="submit" onClick={e => handleSubmit(e)}>Registrar</Button>
                <Link to="/" className='btn btn-outline-dark ms-2'>Go back</Link>
            </Form>
    </div>
  )
}

export default Register