import HeroImg from "../assets/hero.jpg"
import { AiOutlineInstagram,AiOutlineFacebook,AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";
    
export default function Hero(){
  const config ={
    subtitle:'ASPIRING FRONTEND DEVELOPER',
    social:{
      instagram:'https://instagram.com/dharshini.372',
      facebook: 'https://www.facebook.com/profile.php?id=61555216598297&mibextid=ZbWKwL'  ,
      github:'https://github.com/Priyadharshini3729',

      linkedin:'https://linkedin.com/company/priyadharshini37'
    }
  }
    return <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
        <div className="w-1/2 flex flex-col">
        <h1 className=" text-white text-4xl font-hero-font" >Hi,<br/> I'm <span className="text-black">A</span> Priyadharshini
        <p className="text-2xl">{config.subtitle}
            
            </p>
            </h1>
            <div className="flex py-10 ">
              <a href={config.social.instagram} className="pr-5 hover:text-white"><AiOutlineInstagram size={40} /></a>
              <a href={config.social.facebook} className="pr-5 hover:text-white"><AiOutlineFacebook size={40}/></a>
              <a href={config.social.linkedin} className="pr-5 hover:text-white"><AiOutlineLinkedin size={40}/></a>
              <a href={config.social.github}className=" hover:text-white "><AiOutlineGithub size ={40}/></a>

            </div>
            </div>
            <img className="md:w-1/3" src={HeroImg}/>

    </section>

}