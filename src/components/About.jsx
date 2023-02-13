import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
                Hello there! My name is S Bhavith. I'am from Bangalore. Currently
                studying Bachelor's of Engineering in the field of computer science 
                from JSS Academy of Technical Education Bangalore with a CGPA just over 9. 
                I have a strong passion for development. I've recently worked as a software 
                intern developer in a start up called <a href="https://RenderPub.com/" className='text-cyan-500' target='_blank' rel='noreferrer' >RenderPub</a>, where 
                I worked using svelte technology to design their website.     
            </p>
            <br/>
            <p className='text-xl'>
                I stepped into development field by taking a python course in udemy and built
                some amazing real world applications. And then got into web development and learnt
                to build some websites and projects. And then got into couple of internships, had an opportunity to contribute there.
                Even now I keep learning and exploring new technologies that excites me.
            </p>
        </div>
    </div>
  )
}

export default About