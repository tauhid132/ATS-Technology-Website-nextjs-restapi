import React from 'react'
import Script from 'next/script'

export const PageJavaScript = () => {
  return (
   <>
       <script src="/theme/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"/>
	     <script src="/theme/vendor/tiny-slider/tiny-slider.js"/>
        <script src="/theme/vendor/glightbox/js/glightbox.js"/>
        <script src="/theme/vendor/choices/js/choices.min.js"/>
        
        <Script src="/theme/vendor/flatpickr/js/flatpickr.min.js"/>
        <Script src="/theme/js/functions.js"/>

   </>
  )
}
