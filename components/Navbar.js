import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import Script from 'next/script'

export const Navbar = () => {
    const router = useRouter();
const currentRoute = router.pathname;
  return (
    <>
  
    <header id="default_header" className="header_style_1">
    <div className="header_top">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="full">
                        <div className="topbar-left">
                            <ul className="list-inline">
                                <li> <span className="topbar-label"><i className="fa fa-phone"></i></span> <span className="topbar-hightlight">09614 23 23 23</span> </li>
                                <li> <span className="topbar-label"><i className="fa fa-envelope-o"></i></span> <span className="topbar-hightlight"><a href="mailto:info@atsbd.net">info@atsbd.net</a></span> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 right_section_header_top">
                    <div className="float-left">
                        <div className="social_icon">
                            <ul className="list-inline">
                                <li><a className="fa fa-facebook" href="https://www.facebook.com/atstechnologybd" title="Facebook" target="_blank"></a></li>
                                <li><a className="fa fa-google-plus" href="https://plus.google.com/" title="Google+" target="_blank"></a></li>
                                <li><a className="fa fa-twitter" href="https://twitter.com" title="Twitter" target="_blank"></a></li>
                                <li><a className="fa fa-linkedin" href="https://www.linkedin.com/company/ats-technologybd" title="LinkedIn" target="_blank"></a></li>
                                <li><a className="fa fa-instagram" href="https://www.instagram.com" title="Instagram" target="_blank"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="float-right">
                        <div className="make_appo"> <a className="btn white_btn" href="http://selfcare.atsbd.net"><i className="fa fa-user"></i>  Selfcare</a> </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  
    <div className="header_bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                    
                    <div className="logo"> <a href="home"><img src="/images/logo.png" alt="logo" /></a> </div>
                    
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                    
                    <div className="menu_side">
                        <div id="navbar_menu">
                            <ul className="first-ul">
                                <li> <Link href="/"  legacyBehavior>
                                    <a className={currentRoute === "/" 
                                            ? "active" 
                                            : ""}>Home</a>
                                    </Link>
                                </li>
                                <li> <Link href="/home-internet"  legacyBehavior>
                                    <a className={currentRoute === "/home-internet" 
                                            ? "active" 
                                            : ""}>Home Internet</a>
                                    </Link>
                                </li>
                                <li> <Link href="/corporate-internet"  legacyBehavior>
                                    <a className={currentRoute === "/corporate-internet" 
                                            ? "active" 
                                            : ""}>Corporate Internet</a>
                                    </Link>
                                </li>
                                    
                               
                                <li><a href="coverage-area">Coverage</a></li>
                                <li><a href="pay-bill">Pay Bill</a></li>
                                <li> <a href="http://vas.atsbd.net">VAS</a>
                                    
                                </li>
                                <li> <a href="contact-us">Contact</a>
                                    
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
</header>
    </>
  )
}
