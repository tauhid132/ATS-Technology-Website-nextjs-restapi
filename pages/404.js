import React from 'react'
import Link from 'next/link'
const page404 = () => {
  return (
    <>
    <section>
	<div class="container">
		<div class="row align-items-center">
			<div class="col-md-10 text-center mx-auto">
				<img src="assets/images/element/error.svg" class="h-lg-500px mb-4" alt=""/>
				<h1 class="display-1 text-primary mb-0">404</h1>
				<h2>Oh no, something went wrong!</h2>
				<p class="mb-4">Either something went wrong or this page doesn't exist anymore.</p>
				<Link href="/" class="btn btn-light mb-0">Take me to Homepage</Link>
			</div>
		</div>
	</div>
</section>
    </>
  )
}

export default page404