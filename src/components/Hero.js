import HeroImg from "../assets/hero.jpg"
import { AiOutlineInstagram,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
    
export default function Hero(){
  const config ={
    subtitle:'Im a Full stack developer',
    social:{
      instagram:'https://instagram.com/dharshini.372',
      facebook:'https://facebook.com/Priya dharshini',

      linkedin:'https://linkedin.com/company/priyadharshini37'
    }
  }
    return <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
        <div className="w-1/2 flex flex-col">
        <h1 className=" text-white text-4xl font-hero-font" >Hi,<br/> Im <span className="text-black">A</span> Priyadharshini
        <p className="text-2xl">{config.subtitle}
            
            </p>
            </h1>
            <div className="flex py-10 ">
              <a href={config.social.instagram} className="pr-5 hover:text-white"><AiOutlineInstagram size={40} /></a>
              <a href={config.social.facebook} className="pr-5 hover:text-white"><AiOutlineFacebook size={40}/></a>
              <a href={config.social.linkedin} className=" hover:text-white"><AiOutlineLinkedin size={40}/></a>

            </div>
            </div>
            <img className="md:w-1/3" src={HeroImg}/>

    </section>

}