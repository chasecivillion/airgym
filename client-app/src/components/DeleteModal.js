import React from 'react'

function DeleteModal({id, open, onClose, deletePod}) {

  if (!open) return null;

  const areaClose = (e) => {
      if (e.target.id === `${id}`) {
          onClose()
      }
  }

  return (
      <div className="">
          <div onClick={areaClose} id={id} className='fixed z-[9999] w-screen h-screen inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
              <div className='w-[500px] flex flex-col'>
                  <div>
                      <div className='bg-white rounded-md'>
                          <div className="flex pt-4 pb-2 justify-center">
                              Are you sure you want to delete this pod?
                          </div>
                              <button onClick={deletePod} className="w-full font-bold px-4 py-2 pt-2 text-md text-red-500 font-semibold rounded-sm border hover:text-white hover:bg-red-400 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"> Delete </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default DeleteModal