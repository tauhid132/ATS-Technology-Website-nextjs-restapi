import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { PageJavaScript } from '@/components/PageJavaScript'
import { Stylesheet } from '@/components/Stylesheet'

const login = () => {
  return (
    <>
     <PageJavaScript></PageJavaScript>
      <Head>
        <title>ATS Technology - Broadband Internet Service Provider</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       
        <Stylesheet></Stylesheet>
      </Head>
      <section>
     <center>
        <div class="container">
    <div class="col-lg-5">
        <div class="card shadow px-4 py-5">
            
            <h2 class="mb-2 h4">Login to your account!</h2>
            <p class="mb-0">Enter your Email or Mobile No and Password</p>

            <form class="mt-4 text-start">
                <div class="mb-3">
                    <div class="form-icon">
                        <input type="text" class="form-control form-control-icon" name="username" id="iconInput" value="" placeholder="Enter Email or Mobile No"/>
                        <i class="fa fa-user text-black"></i>
                    </div>
                </div>
                
                <div class="mb-3 position-relative">
                    <div class="form-icon">
                        <input type="password" class="form-control form-control-icon" name="password" id="iconInput" placeholder="Enter Password"/>
                        <i class="fa fa-key text-black"></i>
                        <span class="position-absolute top-0 end-15 translate-middle-y p-0 mt-3">
                            <i class="fakepasswordicon fas fa-eye-slash cursor-pointer p-2"></i>
                        </span>
                    </div>
                   
                </div>
                <div class="mb-3 d-flex justify-content-between">
                    <div>
                        <input type="checkbox" class="form-check-input me-2"/>
                        <label class="form-check-label" for="rememberCheck">Remember me?</label>
                    </div>
                    <Link href="/auth/forget-password">Forgot password?</Link>
                </div>
                <div><button type="submit" class="btn btn-primary w-100 mb-0">Login</button></div>

                
                <div class="position-relative my-4">
                    <hr/>
                    <p class="small bg-mode position-absolute top-50 start-50 translate-middle px-2">Don't Have an Account</p>
                </div>

                <div class="gap-3">
                    <center><Link href="/auth/create-account" class="btn w-50 btn-success btn-sm mb-0 rounded-4">Create Account</Link></center>
                </div>

            </form>
        </div>		
    </div>
    </div>
    </center>
    </section>
    </>
  )
}

export default login