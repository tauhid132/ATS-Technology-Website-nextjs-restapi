import React from 'react'

const Footer = () => {
  return (
    <>
    <footer>
							<div class="container">
								<div class="bg-dark rounded-top p-4 pb-0">
									<div class="row g-4 justify-content-between">
										<div class="col-md-5 col-lg-4">
											<a class="me-0" href="index-2.html">
												<img class="light-mode-item h-40px" src="assets/images/logo.svg" alt="logo"/>
												<img class="dark-mode-item h-40px" src="assets/images/logo-light.svg" alt="logo"/>
											</a>
											
											<p class="text-reset mt-4 mb-2">Subscribe to Our Newsletter</p>
											<form class="bg-body rounded-2 p-2">
												<div class="input-group">
													<input class="form-control border-0 me-1" type="email" placeholder="Enter your email"/>
													<button type="button" class="btn btn-dark rounded-2 mb-0"><i class="bi bi-send"></i></button>
												</div>
											</form>
										</div>
										<div class="col-md-7 col-lg-4">
											<div class="row g-4 g-lg-5">
												<div class="col-6">
													<h5 class="mb-2 mb-md-4">Page</h5>
													<ul class="nav flex-column">
														<li class="nav-item"><a class="nav-link pt-0" href="#">Blog</a></li>
														<li class="nav-item"><a class="nav-link" href="#">About</a></li>
														<li class="nav-item"><a class="nav-link" href="#">Contact us</a></li>
														<li class="nav-item"><a class="nav-link" href="#">Services</a></li>
													</ul>
												</div>
												<div class="col-6">
													<h5 class="mb-2 mb-md-4">Links</h5>
													<ul class="nav flex-column">
														<li class="nav-item"><a class="nav-link pt-0" href="#">Sign up</a></li>
														<li class="nav-item"><a class="nav-link" href="#">Sign in</a></li>
														<li class="nav-item"><a class="nav-link" href="#">Privacy Policy</a></li>
														<li class="nav-item"><a class="nav-link" href="#">Terms</a></li>
														<li class="nav-item"><a class="nav-link" href="#">Cookie</a></li>
														<li class="nav-item"><a class="nav-link" href="#">Supports</a></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									
									<hr class="mt-4 mb-0"/>
									<div class="container py-3 px-0">
										<div class="d-md-flex justify-content-between align-items-center text-center text-md-left">
											<div class="text-primary-hover"> Copyrights ©2023 Booking. build by <a href="https://www.webestica.com/">Webestica</a>. </div>
											
											<div class="mt-3 mt-md-0">
												<ul class="nav text-primary-hover justify-content-center justify-content-md-end">
													<li class="nav-item">
														<a class="nav-link text-reset" href="#"><i class="fab fa-facebook-f"></i></a>
													</li>
													<li class="nav-item">
														<a class="nav-link text-reset" href="#"><i class="fab fa-twitter"></i></a>
													</li>
													<li class="nav-item">
														<a class="nav-link text-reset" href="#"><i class="fab fa-instagram"></i></a>
													</li>
													<li class="nav-item">
														<a class="nav-link text-reset" href="#"><i class="fab fa-linkedin-in"></i></a>
													</li>
													<li class="nav-item">
														<a class="nav-link text-reset" href="#"><i class="fab fa-github"></i></a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</footer>
    </>
  )
}

export default Footer