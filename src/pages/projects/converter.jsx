import RootLayout from '@/components/Layouts/RootLayout'
import Title from '@/components/Title'
import { ProjectTitle, ProjectImage, ProjectLink } from '@/components/Project'
import mainPage from '../../../public/images/projects/converter01.png'
import converterPage from '../../../public/images/projects/converter02.png'

const converter = () => {
  return (
    <>
      <RootLayout title='Currency Converter'>
        <div className='mt-[50px]'>
          <ProjectTitle>Currency Converter</ProjectTitle>
          <Title>Welcome to the Currency Converter App!</Title>
          <div className='flex flex-col gap-y-[40px] mb-[30px]'>
            <ProjectImage src={mainPage} alt='Main page' />
            <ProjectImage src={converterPage} alt='Converter page' />
          </div>
          <Title>This project has the following features:</Title>
          <div className='ml-[30px] mb-[30px]'>
            <ul className='list-disc flex flex-col gap-y-[10px] '>
              <li>You can convert from one currency to another;</li>
              <li>You can see exchanges rate for select currency;</li>
              <li>Supports light/dark themes.</li>
            </ul>
          </div>
          <Title>Stack</Title>
          <div className='ml-[30px] mb-[30px]'>
            <ul className='list-disc flex flex-col gap-y-[10px]'>
              <li><ProjectLink href="https://vitejs.dev/">Vite+React</ProjectLink> - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.</li>
              <li><ProjectLink href="https://tailwindcss.com/">Tailwindcss</ProjectLink> - Tailwind CSS is an open source CSS framework.</li>
              <li><ProjectLink href="https://chakra-ui.com/">Chakra UI</ProjectLink> - Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.</li>
              <li><ProjectLink href="https://www.exchangerate-api.com/">ExchangeRate-API</ProjectLink> - Currency conversion rates for 161 currencies.</li>
            </ul>
          </div>
        </div>
      </RootLayout>
    </>
  )
}

export default converter