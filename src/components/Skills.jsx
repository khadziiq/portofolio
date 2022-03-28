import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Postgres from '../assets/postgres.png';

const Skills = () => {
  return (
    <div name='skills' className='sm:w-full sm:h-screen bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the tecnologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500 hover:bg-pink-600'>
                    <img className= "w-20 mx-auto" src={HTML} alt="html-icon" />
                    <p className='my-4 font-bold'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500 hover:bg-pink-600'>
                    <img className= "w-20 mx-auto" src={CSS} alt="css-icon" />
                    <p className='my-4 font-bold'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500 hover:bg-pink-600'>
                    <img className= "w-20 mx-auto" src={JavaScript} alt="JavaScript-icon" />
                    <p className='my-4 font-bold'>Java Script</p>
                </div>
                <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500 hover:bg-pink-600'>
                    <img className= "w-20 mx-auto" src={ReactImg} alt="react-icon" />
                    <p className='my-4 font-bold'>React JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500 hover:bg-pink-600'>
                    <img className= "w-20 mx-auto" src={Node} alt="html-icon" />
                    <p className='my-4 font-bold'>Node JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500 hover:bg-pink-600'>
                    <img className= "w-20 mx-auto" src={GitHub} alt="github-icon" />
                    <p className='my-4 font-bold'>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500 hover:bg-pink-600'>
                    <img className= "w-20 mx-auto" src={Tailwind} alt="tailwind-icon" />
                    <p className='my-4 font-bold'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] rounded-lg hover:scale-110 duration-500 hover:bg-pink-600'>
                    <img className= "w-20 mx-auto" src={Postgres} alt="postgres-icon" />
                    <p className='my-4 font-bold'>Postgres SQL</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Skills