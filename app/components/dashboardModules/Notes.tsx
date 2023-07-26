'use client'
import { fetchDocumentById } from '@/app/(firebase)/firebaseFetchMethods'
import { editNote } from '@/app/(firebase)/firebaseMethods'
import { PencilSquareIcon} from '@heroicons/react/24/outline'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import { FC, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Textarea from 'react-expanding-textarea'

interface NotesProps {

}

const Notes: FC<NotesProps> = ({}) => {
  const [noteData, setNoteData] = useState<string | null>("");
  const [toggleEditMode, setToggleEditMode] = useState<boolean>(false);
  useEffect(() => {
    fetchDocumentById("Notepad", "main")
      .then((data) => {setNoteData(data.data)})
      .catch((error) => {toast.error(`Error Message: ${error}`, {position: "top-right",})});
  }, [])

  function changeNote() {
    editNote(noteData)
    .then((data)=>{console.log(data)})
    .catch((error)=>{toast.error(`Error Message: ${error}`, {position: "top-right"})})
    .finally(() => setToggleEditMode(false))
  }
  return (
  <div className=''>
    <div className='w-full flex justify-between border border-zinc-100 border-l-0 border-r-0 border-t-0 pb-2 mb-2'>
        <h3 className='text-2xl font-bold text-gray-700'>Notes</h3>
    {toggleEditMode ?
        <div>
          <button onClick={()=>changeNote()}>
            <CheckCircleIcon className='w-8 h-8 text-green-500 hover:text-green-700 transition'/>
          </button>
          <button onClick={()=>setToggleEditMode(false)}>
            <XCircleIcon className='w-8 h-8 text-red-500 hover:text-red-700 transition'/>
          </button>
        </div>
        :
        <button onClick={()=>setToggleEditMode(true)} className='text-zinc-500 hover:text-zinc-700'>
          <PencilSquareIcon className='w-6 h-6 transition'/>
        </button>}
    </div>
    {toggleEditMode ?
    <Textarea
      className='w-full max-h-full overflow-y-auto text-gray-500 font-medium text-sm p-3 outline-1 outline-gray-100 rounded-md'
      defaultValue={noteData as string}
      id="notepad"
      maxLength={3000}
      name="notepad"
      onChange={(e)=>setNoteData(e.currentTarget.value)}
      placeholder="Enter notes..."/>
    :
      <p  className='w-full max-h-full overflow-y-auto text-gray-500 font-medium text-sm p-3 font-sans outline-1 outline-gray-100 whitespace-pre-wrap'>
        {noteData}
      </p>}
  </div>
    )
    {/* Note #1<br/>
        Date: May 18, 2023<br/>
        New Product: Introducing our 2023 Advanced Mobility Assist Chair with obstacle detection, intelligent navigation, and voice controls. Plan a team meeting to cover new specs.<br/><br/> */}
}

export default Notes
