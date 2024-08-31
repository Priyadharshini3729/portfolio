
import AboutImg from '../assets/about.jpg';

export default function About(){
    const config ={
        line1:"Hello, I'm Priyadharshini,a Passionate Frontend Developer specializing in modern web application.", 
        line2:'Creating innovative and and efficient solutions.'
    
    
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