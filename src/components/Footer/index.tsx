import Link from "next/link"
import { about,services} from "./footerConsts"

interface footerLinksProps {
    name:string 
    link:string
}

export const Footer = () => {
    return (
        
        <footer className="w-full h-auto p-10 bottom-0 bg-slate-900 text-zinc-500 grid grid-cols-2">

            <div className="col flex-col">
                <h4 className="text-2xl text-cyan-50">Servicos</h4>
                <div className="flex flex-col ">
                {services.map((item=> (<FooterLinks key={item.name} name={item.name} link={item.link}/>)))}

                </div>
            </div>

            <div className="col flex-col">
                <h4 className="text-2xl text-cyan-50">Sobre nós</h4>
                <div className="flex flex-col">
                {about.map((item=> (<FooterLinks key={item.name} name={item.name} link={item.link}/>)))}

                </div>
            </div>


        </footer>
        
    )
}


const FooterLinks = ({name, link}:footerLinksProps) => {

    return (
        <Link href={link} className="hover:text-cyan-600">{name}</Link>
    )
}