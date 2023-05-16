import { FC } from 'react'
// import { Grid } from 'react-loader-spinner'

interface loadingProps {
  
}

const loading: FC<loadingProps> = ({}) => {
  return <div className='animate-spin'>Spinning</div> 
  // <div>
  //   <Grid
  //     height="80"
  //     width="80"
  //     color="#fb923c"
  //     ariaLabel="grid-loading"
  //     radius="12.5"
  //     wrapperStyle={{}}
  //     wrapperClass=""
  //     visible={true}
  //   /></div>
}

export default loading