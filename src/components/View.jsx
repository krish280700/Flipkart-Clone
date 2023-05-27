import React from 'react'
import { offers } from "../Mock/data";
import OfferTag from '../assets/icon/offertag.webp'

function View() {
  return (
    <div>
        <div>
            <h3>OnePlus Nord CE 2 Lite 5G (Black Dusk, 128 GB)  (6 GB RAM)</h3>
            <p><span className='bg-green-700 text-white px-1 py-0.5'>4.4</span><span className='cursor-pointer'>63,230 Ratings & 4,569 Reviews</span> 63,230 Ratings & 4,569 Reviews</p>
            <p className='text-green-700'>Extra ₹18,692 off</p>
            <div className={'flex'}>
                <h1>₹18,692</h1>
                <p className='text-gray-400'>₹19,999</p>
                <p className='text-green-700'>6% off</p>
            </div>
            <p>+ ₹49 Secured Packing Fee</p>
        </div>
        <div>
            <p className=''>Available Offers</p>
            <div>
                {
                    offers.map((item, key) => {
                        return <p key={key} className='flex my-1'>
                            <img src={OfferTag} alt='tag' width='18' height='18'/><span className='font-semibold ml-2'>Bank offer&nbsp;</span> {item} <span className='text-[#2874f0]'>&nbsp;T&C</span>
                        </p>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default View