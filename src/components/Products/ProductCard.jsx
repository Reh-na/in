import React, { useState } from 'react';
import { IoIosCloseCircle } from "react-icons/io";
function ProductCard({ name, imageurl,language,content }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className='w-[250px] pic relative'>
        <div className="image-container" onClick={toggleModal}>
          <img className='w-full rounded-xl' src={imageurl} alt={name} />
          <div className="overlay text-xl">{name}</div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-50" onClick={toggleModal}></div>
          <div className="modal-container z-50 w-4/5 md:w-2/3 lg:w-2/3 max-w-screen mx-auto p-6">
            <div className="modal-content py-4 text-left px-6 rounded shadow-lg relative">
              
              <div className="flex justify-center items-center pb-3">
              <button className="modal-close absolute top-0 right-0  w-2/6 h-1/6 text-white"  onClick={toggleModal}>
              <IoIosCloseCircle className='w-full text-3xl'  />
              </button>
                <img src={imageurl} alt={name} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductCard;
