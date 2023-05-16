import { FC } from 'react'

interface loadingProps {
  
}

const loading: FC<loadingProps> = ({}) => {
  return <div className='animate-ping p-11'>Loading</div> 
}

export default loading