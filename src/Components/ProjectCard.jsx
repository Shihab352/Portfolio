import { useState } from "react";
import { motion } from 'framer-motion';


const ProjectCard = ({ project, index }) => {
  const [openDetails, setOpenDetails] = useState([false, false, false, false]);

  const toggleDetails = (index) => {
    const newOpenDetails = [...openDetails];
    newOpenDetails[index] = !newOpenDetails[index];
    setOpenDetails(newOpenDetails);
  };
  return (
    <div>
      <motion.div

        className="p-6 bg-slate-900 rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}  // Card scaling on hover
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <img className="h-[500px] w-full" src={project.projectImg} alt="" />
        <h3 className="text-2xl my-3 text-white font-bold">{project.title}</h3>


        <button
          className="mt-4 btn text-lg font-lato text-white 
                   bg-gradient-to-r from-slate-700 from-10% via-slate-900 via-30% to-black to-90%  hover:from-black  hover:to-slate-900 "
          onClick={() => toggleDetails(index)}
        >
          {openDetails[index] ? 'Hide Details' : 'Project Details'}
        </button>



        {openDetails[index] && (
          <motion.div
            className="mt-4 p-4 bg-slate-400 rounded-lg shadow-inner"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="my-3 text-black text-lg font-lato font-bold text-center">{project.description}</p>
            <p className="mb-3 text-black font-bold text-lg font-lato">Tech Used :</p>
            {
              project.techs.map((tech, index) => (

                <div key={index}>
                  <ol >
                   
                    <div className="p-2 w-[300px] text-black rounded-lg shadow-md hover:bg-slate-900 hover:text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-100">

                      <div className="  flex items-center gap-3 ">
                        <img className="w-[100px] h-[100px] rounded-xl" src={tech.imgSrc} alt="" />
                        <p className="text-lg font-lato "> {tech.name}</p>
                      </div>
                    </div>
                  </ol>

                </div>
              ))


            }
          </motion.div>
        )}

        <div className="mt-7 flex justify-between">
        <div >
          <a
            href={project?.liveSite}
            target="_blank"
            className="btn text-lg font-lato text-white 
    bg-gradient-to-r from-slate-700 from-10% via-slate-900 via-30% to-black to-90%  hover:from-black  hover:to-slate-900 ">
            Live Link</a>
        </div>
        <div className="">
          <a
            href={project?.gitLink}
            target="_blank"
            className="btn text-lg font-lato text-white 
    bg-gradient-to-r from-slate-700 from-10% via-slate-900 via-30% to-black to-90%  hover:from-black  hover:to-slate-900 ">
            Code Source</a>
        </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;