import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/FormGroup'
import FormLabel from 'react-bootstrap/FormLabel'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function Register() {
    const [form, setForm] = useState({
        register_username: '',
        register_password: '',
        register_confirmation: ''
    })

    function handleChange(event) {
        // Bind form
        const target = event.target
        console.log(target.name, target.value);
        setForm(prevState => {
            return {
                ...prevState,
                [target.name]: target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        // Check if password confirmation is valid
        if (form.register_password != form.register_confirmation) console.log('Passwords don\'t match')
        else console.log('Passwords match')

        // Send account details to API (TODO)
        console.log(form);
    }

    return (
        <div className='p-3'>
            <h2>Registrar</h2>
            <Form>
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