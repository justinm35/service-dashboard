import { FC } from 'react'

interface loadingProps {
  
}

const loading: FC<loadingProps> = ({}) => {
  return <div className='animate-spin'>Spinning</div> 
}

export default loading