import React from 'react'
import myfirstwebpage from '../assets/portfolio/myfirstwebpage.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import simon from '../assets/portfolio/simon.jpg'
import drumkit from '../assets/portfolio/drumkit.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'


const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            src:myfirstwebpage,
            demo:'https://bhavith02.github.io/cv2/',
            code:'https://github.com/Bhavith02/cv2'
        },
        {
            id: 2,
            src:drumkit,
            demo:'https://bhavith02.github.io/InstrumentSound/',
            code:'https://github.com/Bhavith02/InstrumentSound'
        },{
            id: 3,
            src:simon,
            demo:'https://fancy-biscochitos-41c95a.netlify.app/',
            code:'https://github.com/Bhavith02/SimonGame'
        },{
            id: 4,
            src:reactSmooth
        },{
            id: 5,
            src:installNode
        },{
            id: 6,
            src:reactWeather
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolio.map(({id,src,demo,code})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                        <div className='flex items-center justify-center'>
                            <a href={demo} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target='_blank' rel='noreferrer'>Demo</a>
                            <a href={code} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target='_blank' rel='noreferrer'>Code</a>
                        </div>
                    </div>
                ))
            }
            </div>
            
        </div>
    </div>
  )
}

export default Portfolio