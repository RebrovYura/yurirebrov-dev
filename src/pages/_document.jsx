import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-secondary font-poppins scrollbar scrollbar-thin scrollbar-track-[#4A4253] scrollbar-thumb-rounded-[5px] scrollbar-track-rounded-[5px] scrollbar-thumb-label'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
