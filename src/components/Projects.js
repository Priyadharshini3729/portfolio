import websiteImg1 from '../assets/ecommerce.jpg'
import websiteImg2 from '../assets/website.jpg'
import websiteImg3 from '../assets/websiteblog.jpg'



export default function Projects(){
    const config ={
        projects:[
            {
            image:websiteImg1,
            description:'Built Nxt Watch,modelled after YouTube,enabling users to used.',
            link:'https://Nxtwatch.ccbp.tech/'
        },
        {
            image:websiteImg2,
            description:'Developed a cutting-edge e-commerce,platform ispired by Amazon and Filkart',
            link:'https://Nxttrendz.ccbp.tech/'
        },
        {
            image:websiteImg3,
            description:'Built a NxtMart Fruits & Vegetables in E-commerce Website',
            link:'https://nxtmartapp.netlify.app/'
        }
    ]
    }
    return <section id='projects'className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
        <div className="flex flex-col px-10 py-10">
             <h1 className='text-4xl  border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
             <p >These are some of my best projects. I have built these with ReactJS, MERN and CSS. Check them out.</p>
        </div>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5' >
            {config.projects.map((project)=>(
                

            
        <div className='relative'>
         <img className=' h-[200px] w-[500px]' src={project.image}/>
         <div className='project-desc'>
            <p className='text-center px-5  py-5'>{project.description}</p>
         
         <div className='flex justify-center'>
            <a  className="btn" target='_blank' href={project.link}>View Project</a>
            </div>
         
      </div>
      </div>
      
            ))}
       
        </div>
        </div>

    </section>

}
        