
interface layoutProps {
    params: {id: string},
    children: React.ReactNode
}

const layout = async ({params, children} : layoutProps) => {
  return <>{children}</>
}

export default layout