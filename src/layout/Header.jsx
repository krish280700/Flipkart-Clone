import {useState} from 'react'
import flipkart from '../assets/icon/flipkart.png'
import plus from '../assets/icon/plus.png'
function Header() {
	const [toggle, setToggle] = useState(false)  
	return (
		<nav className="bg-[#2874f0] fixed header-nav shadow-lg z-10 top-0 left-0 right-0">
            <div className="flex justify-center mx-auto px-4">
                <div className='lg:block xl:flex items-center'>

                    {/*  Primary Navbar items  */}
                    <ul className="h-full flex items-center">
						<li className={`h-full nav-item text-white flex items-center py-2 mx-2`}>
							<div className='flex flex-col'>
								<img width='75' src={flipkart} className="rounded-lg" alt="flip"/>
								<div className='text-[11px] flex'>
									Explore&nbsp;<span className='italic text-[#ffe500]'>Plus</span><img width='10' src={plus} className="rounded-lg"/>
								</div>
							</div>
						</li>
						<li className={`h-full nav-item text-white flex items-center py-2 mx-2 header-search-container`}>
							<div className='w-full'>
								<div className='w-full'>
									<input type='text' placeholder='Search for products, brands and more' autoComplete='off' className='header-search w-full'/>
								</div>
							</div>
						</li>
						<li className={`h-full nav-item text-white flex items-center py-2 mx-2`}>
							<a className="rounded-lg  px-4 py-1 bg-white text-[#2874f0] rounded-none">Login</a>
						</li>
						<li className={`h-full nav-item text-white flex items-center py-2 mx-2`}>
							<a className="rounded-lg  px-3 py-2  ">Become a seller</a>
						</li>
						<li className={`h-full nav-item text-white flex items-center py-2 mx-2`}>
							<a className="rounded-lg  px-3 py-2  ">More</a>
						</li>
						<li className={`h-full nav-item text-white flex items-center py-2 mx-2`}>
							<a className="rounded-lg  px-3 py-2  ">Cart</a>
						</li>
                    </ul>
                </div>
            </div>
        </nav>
	)
}

export default Header