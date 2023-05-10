interface layoutProps {
  children: React.ReactNode
}

const layout = async ({children} : layoutProps) => {

  return (
    <>
        {children}
    </>
    )
}

export default layout