import React from 'react'

const Footer = () => {
  return (
    <>
   <footer class="bg-dark pt-5">
	<div class="container">
		<div class="row g-4">
			<div class="col-lg-4">
				<a href="index-2.html">
					<img class="h-40px" src="/images/page_images/logo.png" alt="logo"/>
				</a>
				<p class="my-3 text-muted">Bangladesh Freelance Job Marketplace</p>
				
					<h5 class="text-white mb-2">Follow us on</h5>
					<ul class="list-inline mb-0 mt-3">
						<li class="list-inline-item"> <a class="btn btn-sm px-2 bg-facebook mb-0" href="#"><i class="fab fa-fw fa-facebook-f"></i></a> </li>
						<li class="list-inline-item"> <a class="btn btn-sm shadow px-2 bg-instagram mb-0" href="#"><i class="fab fa-fw fa-instagram"></i></a> </li>
						<li class="list-inline-item"> <a class="btn btn-sm shadow px-2 bg-twitter mb-0" href="#"><i class="fab fa-fw fa-twitter"></i></a> </li>
						<li class="list-inline-item"> <a class="btn btn-sm shadow px-2 bg-linkedin mb-0" href="#"><i class="fab fa-fw fa-linkedin-in"></i></a> </li>
					</ul>	
				
			</div>
			<div class="col-lg-8 ms-auto">
				<div class="row g-4">
					<div class="col-4 col-md-4">
						<h5 class="text-white mb-2 mb-md-4">Page</h5>
						<ul class="nav flex-column text-primary-hover">
							<li class="nav-item"><a class="nav-link text-muted" href="#">About us</a></li>
							<li class="nav-item"><a class="nav-link text-muted" href="#">Contact us</a></li>
							<li class="nav-item"><a class="nav-link text-muted" href="#">News and Blog</a></li>
							<li class="nav-item"><a class="nav-link text-muted" href="#">Meet a Team</a></li>
						</ul>
					</div>

					<div class="col-4 col-md-4">
						<h5 class="text-white mb-2 mb-md-4">Link</h5>
						<ul class="nav flex-column text-primary-hover">
							<li class="nav-item"><a class="nav-link text-muted" href="#">Privacy Policy</a></li>
							<li class="nav-item"><a class="nav-link text-muted" href="#">Terms & Conditions</a></li>
							<li class="nav-item"><a class="nav-link text-muted" href="#">Refund Policy</a></li>
							<li class="nav-item"><a class="nav-link text-muted" href="#">Support</a></li>
						</ul>
					</div>
									
					
					<div class="col-4 col-md-4">
						<h5 class="text-white mb-2 mb-md-4">Downloads</h5>
						<ul class="nav flex-column text-primary-hover downloads">
							<li class="nav-item mb-2"><a href="#"><img src="/images/page_images/play_store.svg"/></a></li>
							<li class="nav-item mb-2"><a href="#"><img src="/images/page_images/apple.svg"/></a></li>
						</ul>
					</div>
				</div>
			</div>
			
		</div>
		
		<div class="row g-4 justify-content-between mt-0 mt-md-2">
			<div class="col-sm-12 col-md-12 col-lg-12">
			  <img class="sslcommerz" src="/images/page_images/sslcommerz.webp"/> 
			</div>
		  </div>
		<hr class="mt-4 mb-0"/>
		<div class="row">
			<div class="container">
				<div class="d-lg-flex justify-content-center align-items-center py-3 text-center text-lg-start">
					<div class="text-muted text-primary-hover"> Copyrights © 2023 <a href="https://www.jobfid.com/" class="text-muted">Jobfid Bangladesh</a></div>
					
				</div>
			</div>
		</div>
	</div>
</footer>
    </>
  )
}

export default Footer