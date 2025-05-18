import React from 'react'

const CreateDetail = () => {
  return (
    <div className='p-5 bg-stone-900  mt-7 rounded'>
        <form className='flex flex-wrap w-full items-start bg-cyan-900 justify-between '>
            <div className='w-1/2 p-4'>
                <div>
                    <div>
                        <h3 className='text-sm text-slate-400 mb-0.5'>Student's CGPA</h3>
                        <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-orange-300 mb-4' type="number" placeholder='CGPA obtain....' />
                    </div>
                </div>

            <div>

            <h3 className='text-sm text-slate-400 mb-0.5'>Semester</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-orange-300 mb-4 text-slate-400'  type="text" name="" placeholder="Name of Semester" id="" />
            </div>

            <div>
            <h3 className='text-sm text-slate-400 mb-0.5'>Certification</h3>
            <textarea className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-orange-300 mb-4'  type="text"  />
            </div>
            
            <div>
            <h3 className='text-sm text-slate-400 mb-0.5'>ExtraCurriculum</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-orange-300 mb-4'  type="text" placeholder='Joined any Clubs etc' />
            </div>
            </div>

            <div className='w-1/2 p-4'>
            <h3 className='text-sm text-slate-400 mb-0.5'>Projects</h3>
            <textarea className='text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-[1px] border-orange-300'   id=""></textarea>
            <button className='bg-teal-800 py-3 hover:bg-teal-700 px-5 rounded text-sm mt-4 w-full'>Create task</button>
            </div>

            

            
        </form>
      </div>
  )
}

export default CreateDetail
