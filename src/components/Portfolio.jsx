import React from 'react'
import myfirstwebpage from '../assets/portfolio/myfirstwebpage.jpg'
import menu3 from '../assets/portfolio/menu3.jpg'
import simon from '../assets/portfolio/simon.jpg'
import drumkit from '../assets/portfolio/drumkit.jpg'
import menu1 from '../assets/portfolio/menu1.jpg'
import menu4 from '../assets/portfolio/menu4.jpg'
import menu2 from '../assets/portfolio/menu2.jpg'


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
            demo:'https://bhavith02.github.io/SimonGame/',
            code:'https://github.com/Bhavith02/SimonGame'
        },{
            id: 4,
            src:menu1,
            demo:'https://bhavith02.github.io/menu-project1/',
            code:'https://github.com/Bhavith02/menu-project1'
        },{
            id: 5,
            src:menu3,
            demo:'https://bhavith02.github.io/menu-project3/',
            code:'https://github.com/Bhavith02/menu-project3'
        },{
            id: 6,
            src:menu4,
            demo:'https://bhavith02.github.io/menu-project4/',
            code:'https://github.com/Bhavith02/menu-project4'
        },{
            id: 7,
            src:menu2,
            demo:'https://bhavith02.github.io/menu-project2/',
            code:'https://github.com/Bhavith02/menu-project2'
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full pb-8'>
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