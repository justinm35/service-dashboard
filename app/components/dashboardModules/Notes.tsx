'use client'
import { PencilIcon, PencilSquareIcon} from '@heroicons/react/24/outline'
import { FC } from 'react'

interface NotesProps {
  
}

const Notes: FC<NotesProps> = ({}) => {
  return (
  <div className='max-h-32 relative'>
    <div className='w-full flex justify-between border border-zinc-100 border-l-0 border-r-0 border-t-0 pb-2 mb-2'>
        <h3 className='text-2xl font-bold text-gray-700'>Notes</h3>
        <PencilSquareIcon  className='w-5 h-5 text-zinc-500 hover:text-zinc-700 transition'/>
    </div>
    <div className='w-full max-h-full overflow-y-auto text-gray-500 font-medium text-sm'>
        Note #1<br/>
        Date: May 18, 2023<br/>
        New Product: Introducing our 2023 Advanced Mobility Assist Chair with obstacle detection, intelligent navigation, and voice controls. Plan a team meeting to cover new specs.<br/><br/>
        Note #2<br/>
        Date: May 16, 2023<br/>
        Safety Reminder: Ensure all equipment is installed as per guidelines. Don&apos;t forget to schedule 30-day follow-up appointments for client satisfaction checks.<br/><br/>
        Note #3<br/>
        Date: May 15, 2023<br/>
        Training Session: Mandatory training on updated installation protocols this Friday at 2 p.m. Complete the post-training quiz to confirm understanding.
    </div>
  </div>
    )
}

export default Notes