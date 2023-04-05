import { PageJavaScript } from '@/components/PageJavaScript'
import { Stylesheet } from '@/components/Stylesheet'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      
      <Head />
      <Stylesheet/>
      
      
      <body>
        <Main />
        <NextScript />
       
      </body>
     
    </Html>
  )
}
