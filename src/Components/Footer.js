import { Github, Linkedin, Facebook, Instagram } from 'lucide-react';

function Footer(){
    return(
        <footer>
            <div className="Upper">
            <h1 className="CardTitle">Sujal Pokhrel</h1>
            <p className="CardText">Hi, I'm Sujal Pokhrel, a dedicated Front-End Developer with expertise in HTML, CSS, JavaScript, and React.js. I thrive on creating engaging, responsive, and dynamic web applications that offer seamless user experiences. Let's build something amazing together!</p>
           </div>
           <div className="flex gap-4 icons">
            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors facebook">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors insta">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors git">
              <Github size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors linkedin">
              <Linkedin size={24} />
            </a>
          </div>
       
        </footer>

    );
}

export default Footer;