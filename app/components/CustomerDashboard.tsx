import { DecodedIdToken } from 'firebase-admin/auth'
import { Auth } from 'firebase/auth'
import Image from 'next/image'
import { FC } from 'react'
import stairLiftImg from '/public/stock-stairlift.png'

interface CustomerDashboardProps {
  session : DecodedIdToken
}

const CustomerDashboard: FC<CustomerDashboardProps> = ({session}) => {
  return (
    <div className='h-full flex w-full justify-center items-center'>
        <div className="px-4 mx-auto text-center  lg:px-12 h-auto">
            <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-200 rounded-full hover:bg-gray-200" role="alert">
                <span className="text-xs bg-orange-400 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">TAS Service Dashboard!</span> 
            </a>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Welcome {session.currentUser?.email}</h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">TAS has a new solution! Helping you track equipment status and schedule service calls easier than ever before.</p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-300">
                    Learn more
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    Watch video
                </a>  
            </div>
        </div>
        <Image src={stairLiftImg} alt="Generic Stair Lift" height={500} width={500} className='absolute bottom-0 right-0 -z-10' />
    </div>
    )
}

export default CustomerDashboard

