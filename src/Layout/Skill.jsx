import SkillCard from "../Components/SkillCard";


const Skill = () => {
    const skills = [
        { name: 'React JS', imgSrc: 'https://i.ibb.co.com/SPTWcPc/react.jpg' },  
        { name: 'Node.js', imgSrc: 'https://i.ibb.co.com/J5yGQqT/node.png' },
        { name: 'JavaScript', imgSrc: 'https://i.ibb.co.com/cLspvJq/js.jpg' },  
        { name: 'HTML5', imgSrc: 'https://i.ibb.co.com/rtLzgMD/html5.webp' },  
        { name: 'CSS3', imgSrc: 'https://i.ibb.co.com/hYZDWnW/css3.png' },  
        { name: 'Tailwind CSS', imgSrc: 'https://i.ibb.co.com/8YQhy2f/tailwind.jpg' },  
        { name: 'Bootstrap', imgSrc: 'https://i.ibb.co.com/3Fpnx7c/bootstrap.jpg' },  
        { name: 'React Router', imgSrc: 'https://i.ibb.co.com/cCyrtDL/reactrouter.webp' },  
        { name: 'Material-UI', imgSrc: 'https://i.ibb.co.com/6b1kS5z/materialui.png' },  
        { name: 'React Bootstrap', imgSrc: 'https://i.ibb.co.com/93HCcWJ/react-Bootstrap.png' },  
        { name: 'Firebase', imgSrc: 'https://i.ibb.co.com/QckkNTR/firebase.png' },  
        { name: 'gitHub Pages', imgSrc: 'https://i.ibb.co.com/tCVkwhg/gitpage.jpg' },  
      ];
    
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center  rounded-t-3xl bg-slate-900">
      <h2 className="text-5xl font-bold font-roboto text-white mt-10  mb-10">TECH SKILLS</h2>
      <div className="grid grid-cols- md:grid-cols-4 gap-8">
        {skills.map((skill, index) => <SkillCard skill={skill} key={index}></SkillCard>)}
      </div>
    </div>
        </div>
    );
};

export default Skill;