import {footerData, footerContactData} from '../Mock/data'

function Footer() {
    return (
        <>
            <div className='bg-[#172337] text-white text-xs footer-container mt-2'>
                <div className='flex'>
                    <div className='flex justify-evenly'>
                        {
                            footerData.map((item, key) => {
                                return <div className="px-2 py-4">
                                    <p>{item.title}</p>
                                    <ul className='mt-2'>
                                        {
                                            item.list.map((ele, index) => {
                                                return <li key={index}>{ele}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                    <div className="border-l-2 flex">
                        {
                            footerContactData.map((item, key) => {
                                return  <div key={key} className='ml-2'>
                                            <p>{item.title}</p>
                                            <p>{item.text}</p>
                                        </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer