const Content = ({children}) => {
  return (
    <div className='max-w-[480px] text-justify hyphens-auto indent-[20px] pl-[15px] border-l-[1px] dark:border-primary border-secondary'>
      {children}
    </div>
  )
}

export default Content