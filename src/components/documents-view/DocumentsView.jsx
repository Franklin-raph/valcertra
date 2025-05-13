import React from 'react'
import { IoArrowBackOutline, IoCloseOutline } from 'react-icons/io5'

const DocumentsView = ({setViewDocument, fileName, fileToView}) => {
  return (
    <div>
        <div>
            <div className="h-full w-full fixed top-0 left-0 z-[99] bg-opacity-70 backdrop-blur-sm" style={{ background:"rgba(14, 14, 14, 0.58)" }} ></div>
            <div className="flex items-center flex-col text-center justify-center gap-3 bg-white fixed top-[50%] left-[50%] py-[20px] px-[0.5rem] z-[100] rounded-[8px] w-[870px]" style={{ transform: "translate(-50%, -50%)" }}>
                {/* Modal Header with back button and close button */}
                <div className="flex items-center justify-between px-4 mb-2 w-full">
                    {/* <div className="flex items-center">
                        <button className="bg-blue-900 text-white rounded-md p-2 mr-4">
                            <IoArrowBackOutline />
                        </button>
                    </div> */}
                    <div></div>
                    <img src="./logo.svg" alt="" />
                    <button className="text-gray-500 text-[20px]">
                        <IoCloseOutline onClick={() => setViewDocument('')}/>
                    </button>
                </div>
                <p className='text-[#333333] font-[500] text-[20px]'>Product Document</p>
                <p className='text-[#344054]'>{fileName}</p>
                <img src={fileToView} alt="" className='w-[70%]'/>
            </div>
        </div>
    </div>
  )
}

export default DocumentsView