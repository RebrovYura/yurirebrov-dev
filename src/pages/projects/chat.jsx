import RootLayout from '@/components/Layouts/RootLayout'
import Title from '@/components/Title'
import { ProjectTitle, ProjectImage, ProjectLink, ProjectBlock } from '@/components/Project'
import mainPage from '../../../public/images/projects/chat01.png'

const chat = () => {
  return (
    <>
      <RootLayout title='Chat App'>
        <div className='mt-[50px]'>
          <ProjectTitle>Chat App</ProjectTitle>
          <Title>Welcome to the Chat App!</Title>
          <div className='flex flex-col gap-y-[40px] mb-[30px]'>
            <ProjectImage src={mainPage} alt='Main page' />
          </div>
          <Title>This project has the following features:</Title>
          <ProjectBlock>
            <li>Login/Register an account;</li>
            <li>Find friends using search;</li>
            <li>Write and send messages.</li>
          </ProjectBlock>
          <Title>Stack</Title>
          <ProjectBlock>
            <li><ProjectLink href="https://vitejs.dev/">Vite+React</ProjectLink> - Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.</li>
            <li><ProjectLink href="https://tailwindcss.com/">Tailwindcss</ProjectLink> - Tailwind CSS is an open source CSS framework.</li>
            <li><ProjectLink href="https://chakra-ui.com/">Chakra UI</ProjectLink> - Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.</li>
            <li><ProjectLink href="https://firebase.google.com/">Firebase</ProjectLink> - Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.</li>
          </ProjectBlock>
          <Title>Source</Title>
          <ProjectBlock>
            <li><ProjectLink href="https://github.com/RebrovYura/chat-app">GitHub</ProjectLink></li>
          </ProjectBlock>
        </div>
      </RootLayout>
    </>
  )
}

export default chat