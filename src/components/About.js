
import AboutImg from '../assets/about.jpg';

export default function About(){
    const config ={
        line1:' Hi, My name is  A Priyadharshini. I am Full Stack Developer. I built beautiful Websites with React.js and Tailwind CSS.',
        line2:'I am Proficient Frontend Skills like React.js, Redux ,Redux Tool Kit, Axio, Tailwind CSS, SaSS ,Css3 and many more constructor.'
    
    
    }
    return <section className='flex flex-col md:flex-row bg-secondary px-5 'id='about'>
        <div className=' py-5 md:w-1/2 flex justify-center ' >
        <img  className='w-[400px]'  src={AboutImg}  />
        </div>
        <div className='md:w-1/2 flex justify-center '>
        <div className='flex flex-col justify-center text-white '>
            <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5' >{config.line1} </p>
             <p className='pb-5' > {config.line2}</p>
        </div>
        </div>
    </section>
}