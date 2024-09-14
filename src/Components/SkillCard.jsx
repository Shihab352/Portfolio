

const SkillCard = ({skill }) => {
   
    return (
        <div className="p-2 text-white  rounded-lg shadow-md hover:bg-slate-500 hover:text-black transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">
          <div className=" flex items-center gap-3">
          <img className="w-[100px] h-[100px] rounded-xl" src={skill.imgSrc} alt="" />
         <p className="text-lg  font-lato"> {skill.name}</p>
          </div>
        </div>
    );
};

export default SkillCard;