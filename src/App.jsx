import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'



function App() {
	const [user, setUser] = useState(null)
	
	return (
		<div className="p-3">
			<nav className='mt-3 mb-3 d-flex justify-content-between'>
				<div>Acme <small>logo</small></div>
				{ user && 
					<div>
						<img src="" alt="Foto do usuário" />
						<p>{user.user}</p>
					</div>
				}
			</nav>
			<header className='mt-3 mb-3'>
				<h1>Seja bem vindo a Acme!</h1>
			</header>
			<main>				
				<div>
					<Link to='/login'>Já tenho uma conta</Link>
				</div>
				<div>
					Não tem uma conta ainda? <Link to='/register'>Registrar</Link>
				</div>
				<div>
					<Outlet/>
				</div>
			</main>
		</div>
	)
}

export default App
