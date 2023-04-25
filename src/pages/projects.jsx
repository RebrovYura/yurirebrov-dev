import Title from '@/components/Title'
import RootLayout from '@/components/Layouts/RootLayout'
import ProjectItem from '@/components/ProjectItem'
import converter from '../../public/images/projects/converter01_thumb.png'
import chat from '../../public/images/projects/chat01.png'

const projects = () => {
  return (
    <>
      <RootLayout title='Projects'>
        <div className='flex flex-col w-full'>
          <Title>Projects</Title>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-[30px] justify-items-center'>
            <ProjectItem link='converter' thumbnail={converter} title='Currency converter app'>
              This application allows you to transfer from one currency to another.
            </ProjectItem>
            <ProjectItem link='chat' thumbnail={chat} title='Chat app'>
              This application allows you to chat with other users.
            </ProjectItem>
          </div>
        </div>
      </RootLayout>
    </>
  )
}

export default projects