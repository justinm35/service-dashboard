import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'

interface SettingsProps {
  
}

const Settings: FC<SettingsProps> = ({}) => {
  return <div className='w-full h-screen flex justify-center items-center'>
    <div className=' text-gray-400 flex justify-center items-center flex-col'>
      <Cog6ToothIcon className='w-12 h-12' />
      <p className='font-medium w-48 text-lg text-center'>No settings to be changed yet.</p>
    </div>
  </div>
}

export default Settings