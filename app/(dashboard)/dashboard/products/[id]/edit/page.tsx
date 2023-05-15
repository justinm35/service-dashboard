import { FC } from 'react'

interface pageProps {
  params: {id: string}
}

const page: FC<pageProps> = ({params}) => {
  return <div>edit: {params.id}</div>
}

export default page