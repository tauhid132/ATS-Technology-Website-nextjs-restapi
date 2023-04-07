import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import Script from 'next/script'

export const Navbar = () => {
    const router = useRouter();
const currentRoute = router.pathname;
  return (
    <>
  <header className="navbar-light header-sticky">
	<nav className="navbar navbar-expand-xl">
		<div className="container">
			<Link className="navbar-brand" href="/">
				<img className="light-mode-item navbar-brand-item" src="/images/page_images/logo.png" alt="logo"/>
			</Link>
			<button className="navbar-toggler ms-auto mx-3 me-md-0 p-0 p-sm-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-animation">
					<span></span>
					<span></span>
					<span></span>
				</span>
			</button>
			<div className="navbar-collapse collapse" id="navbarCollapse">
				<ul className="navbar-nav navbar-nav-scroll">
					<li className="nav-item dropdown">
						<a className="nav-link" href="#">Freelancers</a>
					</li>
                    <li className="nav-item dropdown">
						<a className="nav-link" href="#">Find Job</a>
					</li>
                    <li className="nav-item dropdown">
						<a className="nav-link" href="#">Services</a>
					</li>
				</ul>
			</div>
			<ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">

				<li className=" nav-item dropdown me-2">
					<a className="language-toggler text-black rounded border border-success px-3 py-2" href="#" id="bd-theme" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="/images/page_images/bn.png"/> বাংলা
                    </a>

					<ul className="dropdown-menu min-w-auto dropdown-menu-end mt-2" aria-labelledby="bd-theme">
						<li className="mb-1">
                            <a className="language-toggler text-black rounded p-1 d-flex align-items-center" href="#" >
                                <img src="/images/page_images/bn.png"/> বাংলা
                            </a>
						</li>
						<li className="mb-1">
                            <a className="language-toggler text-black rounded p-1 d-flex align-items-center" href="#">
                                <img src="/images/page_images/en.png/"/>  English
                            </a>
						</li>
					</ul>
				</li>
				<li className="nav-item ms-3">
				<Link href="/auth/login" className='btn btn-sm btn-primary mb-0'>Login / Register</Link>
				</li> 
			</ul>
			

		</div>
	</nav>
</header>
    </>
  )
}
