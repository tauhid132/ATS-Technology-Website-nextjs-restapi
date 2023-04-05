import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import Script from 'next/script'

export const Navbar = () => {
    const router = useRouter();
const currentRoute = router.pathname;
  return (
    <>
  
  <div className="alert alert-warning py-2 bg-primary border-0 rounded-0 alert-dismissible fade show text-center overflow-hidden" role="alert">
		<span className="text-white"><i class="fa fa-envelope text-white"></i> info@atsbd.net</span> <span className="text-white"><i className="fa fa-phone text-white"></i> 09614 23 23 23</span>
		
	</div>
	<header className="navbar-light header-sticky">
		<nav className="navbar navbar-expand-xl">
			<div className="container">
				<a className="navbar-brand" href="index-2.html">
					<img className="light-mode-item navbar-brand-item" src="./images/logo.png" alt="logo"/>
					<img className="dark-mode-item navbar-brand-item" src="assets/images/logo-light.svg" alt="logo"/>
				</a>
				<button className="navbar-toggler ms-auto ms-sm-0 p-0 p-sm-2 float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-animation">
						<span></span>
						<span></span>
						<span></span>
					</span>
					<span className="d-none d-sm-inline-block small">Menu</span>
				</button>
				<div className="navbar-collapse collapse" id="navbarCollapse">
					<ul className="navbar-nav navbar-nav-scroll mx-auto">
						<li className="nav-item dropdown">
							<a className="nav-link " href="#" >Home</a>
							
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link " href="#" >Home Internet</a>
							
						</li>
						
						<li className="nav-item dropdown">
							<a className="nav-link " href="#" >Corporate Internet</a>
							
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link " href="#" >Coverage</a>
							
						</li>
						
						<li className="nav-item dropdown">
							<a className="nav-link " href="#" >Pay Bill</a>
							
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link " href="#" >VAS</a>
							
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link " href="#" >Contact Us</a>
							
						</li>
					</ul>
				</div>
				<a href="#" className="btn btn-success ml-2">Selfcare</a>
			</div>
		</nav>
	</header>
    </>
  )
}
