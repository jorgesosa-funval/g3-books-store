import React, { useRef, useState } from 'react'

export default function Searchbar() {
  const [openModal, setOpenModal] = useState(false);
  const searchValueRef = useRef(null)

  const toggleModal = () => {
    setOpenModal(!openModal)
    // setOpenModal((prev) => { return !prev}) manera correcta
  }

  const modalOut = (e) => {
    const { id } = e.target;
    if (id === 'modal') {
      toggleModal()
    }
  }

  return (
    <>
      <div className="flex gap-2py-2 justify-end">
        <div className='bg-white w-80 h-14 border shadow rounded cursor-pointer hover:shadow-lg' onClick={toggleModal}>
          Aqui val lo necesario de su boton
        </div>
        {/* <input
          type="search"
          className="border rounded h-9 w-80 px-2"
          placeholder="Buscar libro..."
          ref={searchValueRef}
        // onChange={(e)=> setSearchValue(e.target.value)}
        /> */}
        {/* <button className="px-4 py-2 bg-blue-600 font-bold rounded cursor-pointer" onClick={() => {
          console.log(searchValueRef.current)
          // filterBooks(searchValueRef.current.value)
          // filterBooks(searchValue)
        }}>
          Buscar
        </button> */}
      </div>
      {
        openModal &&
        <div className='w-screen h-screen top-0 left-0 bg-gray-950/20 fixed z-1' id='modal' onClick={modalOut}>
          <button className='md:hidden absolute right-8 top-2 cursor-pointer text-2xl' onClick={toggleModal} id='boton'>
            &times;
          </button>
          <div className='w-full h-1/2 bg-white'>
            <input
              type="search"
              className="border rounded h-9 w-80 px-2"
              placeholder="Buscar libro..."
              ref={searchValueRef}
            // onChange={(e)=> setSearchValue(e.target.value)}
            />
          </div>
        </div>

      }
    </>
  )
}
