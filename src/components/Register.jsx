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
        register_username: '',
        register_password: '',
        register_confirmation: ''
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
        const {register_username, register_password, register_confirmation} = form

        // No empty fields
        if (register_confirmation == '' || register_password == '' || register_username == '') {
            showFormAlert('Há campos em branco')
            return
        }

        // Check if password confirmation is valid
        if (register_password != register_confirmation) { 
            showFormAlert('Senha não conferem')
            return
        }

        // Send account details to API (TODO)
        console.log(form);
    }

    return (
        <div className='p-3'>
            <h2>Registrar</h2>
            <Form>
                { formAlert.active && <Alert variant={formAlert.variant}>{formAlert.message}</Alert>}
                <FormGroup className='mb-3' controlId="register_username">
                    <FormLabel>Nome de usuário: </FormLabel>
                    <FormControl 
                        type="text" 
                        placeholder="Seu nome de usuário" 
                        onChange={e => handleChange(e)} 
                        name="register_username" 
                        value={form.register_username} 
                    />
                </FormGroup>
                <FormGroup className='mb-3' controlId="register_password">
                    <FormLabel>Senha: </FormLabel>
                    <FormControl 
                        type="password" 
                        placeholder="Sua senha" 
                        onChange={e => handleChange(e)} 
                        name="register_password" 
                        value={form.register_password} 
                    />
                </FormGroup>
                <FormGroup className='mb-3' controlId="register_confirmation">
                    <FormLabel>Confirme sua senha: </FormLabel>
                    <FormControl 
                        type="password" 
                        placeholder="Sua senha" 
                        onChange={e => handleChange(e)} 
                        name="register_confirmation" 
                        value={form.register_confirmation} 
                    />
                </FormGroup>
                <Button variant="primary" type="submit" onClick={e => handleSubmit(e)}>Registrar</Button>
                <Link to="/" className='btn btn-outline-dark ms-2'>Go back</Link>
            </Form>
    </div>
  )
}

export default Register