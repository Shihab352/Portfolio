import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer =() => {
    return (
        <div>
            <footer className="bg-slate-500 text-center p-6 lg:flex items-center justify-evenly">
      <div className="lg:flex justify-center gap-2 space-x-4">
        {/* <a href="https://github.com" className="text-gray-600 hover:text-primary">GitHub</a>
        <a href="https://linkedin.com" className="text-gray-600 hover:text-primary">LinkedIn</a> */}
         {/* Email Me Button with Tooltip */}
         <div className="tooltip" data-tip="Sazzadulkarim352@gmail.com">
          <a href="mailto:email@example.com" className="btn  text-lg font-lato text-white 
    bg-gradient-to-r from-slate-700 from-10% via-slate-900 via-30% to-black to-90%  hover:from-black  hover:to-slate-900  ">
          <MdEmail />
            Email me
          </a>
        </div>

         {/* GitHub Button with Tooltip */}
         <div className="tooltip" data-tip="My Other Project">
          <a href="https://github.com/Shihab352?tab=repositories" target="_blank" rel="noreferrer" className="btn text-lg font-lato text-white 
    bg-gradient-to-r from-slate-700 from-10% via-slate-900 via-30% to-black to-90%  hover:from-black  hover:to-slate-900  ">
          <FaGithub />
           GitHub
          </a>
        </div>

         {/* LinkedIn Button with Tooltip */}
         <div className="tooltip" data-tip="Visit my LinkedIn ">
          <a href="www.linkedin.com/in/sazzadul-karim-4519762b3" target="_blank" rel="noreferrer" className="btn text-lg font-lato text-white 
    bg-gradient-to-r from-slate-700 from-10% via-slate-900 via-30% to-black to-90%  hover:from-black  hover:to-slate-900 ">
          <FaLinkedin />
            LinkedIn
          </a>
        </div>

      </div>


      <form className="mt-4 grid grid-flow-row ">
        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
        <textarea placeholder="Message" className="textarea textarea-bordered w-full max-w-xs mt-2"></textarea>
        <button className="btn text-lg font-lato text-white 
    bg-gradient-to-r from-slate-700 from-10% via-slate-900 via-30% to-black to-90%  hover:from-black  hover:to-slate-900  mt-2">Send</button>
      </form>
    </footer>
            
        </div>
    );
};

export default Footer;