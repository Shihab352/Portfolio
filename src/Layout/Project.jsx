
import ProjectCard from '../Components/ProjectCard';

const Project = () => {




  const projects = [
    {
      title: 'Books Review',
      description: 'This is a Book Review Website.',
      projectImg: 'https://i.ibb.co.com/zxqsJyp/Books-Vibe.png',
      techs: [
        { name: 'React JS', imgSrc: 'https://i.ibb.co.com/SPTWcPc/react.jpg' },
        { name: 'HTML5', imgSrc: 'https://i.ibb.co.com/rtLzgMD/html5.webp' },
        { name: 'CSS3', imgSrc: 'https://i.ibb.co.com/hYZDWnW/css3.png' },
        { name: 'Tailwind CSS', imgSrc: 'https://i.ibb.co.com/8YQhy2f/tailwind.jpg' },
      ],
      liveSite:"https://books-review-1e722b.netlify.app",
      gitLink:"https://github.com/Shihab352/Book-Review",
    },
    {
      title: 'Career Hub',
      description: 'This is a Career management Website.',
      projectImg: 'https://i.ibb.co.com/gmN0gqv/Carrer-Hub.png',
      techs: [
        { name: 'React JS', imgSrc: 'https://i.ibb.co.com/SPTWcPc/react.jpg' },
        { name: 'HTML5', imgSrc: 'https://i.ibb.co.com/rtLzgMD/html5.webp' },
        { name: 'CSS3', imgSrc: 'https://i.ibb.co.com/hYZDWnW/css3.png' },
        { name: 'Tailwind CSS', imgSrc: 'https://i.ibb.co.com/8YQhy2f/tailwind.jpg' },
      ],
    },
    {
      title: "Chef's Table",
      description: 'This is a Resturant Website',
      projectImg: 'https://i.ibb.co.com/L9GtGJ5/Chefs-Table.png',
      techs: [
        { name: 'React JS', imgSrc: 'https://i.ibb.co.com/SPTWcPc/react.jpg' },
        { name: 'HTML5', imgSrc: 'https://i.ibb.co.com/rtLzgMD/html5.webp' },
        { name: 'CSS3', imgSrc: 'https://i.ibb.co.com/hYZDWnW/css3.png' },
        { name: 'Tailwind CSS', imgSrc: 'https://i.ibb.co.com/8YQhy2f/tailwind.jpg' },
      ],
      liveSite:"https://chefs-table009.netlify.app/",
      gitLink:"https://github.com/programming-hero-web-course1/b9a7-chefs-table-Shihab352",
     
    
    },
    {
      title: 'Dragon News',
      description: 'This is a News Blog Website',
      projectImg: 'https://i.ibb.co.com/cLDJgvc/Dragon-News.png',
      techs: [
        { name: 'React JS', imgSrc: 'https://i.ibb.co.com/SPTWcPc/react.jpg' },
        { name: 'HTML5', imgSrc: 'https://i.ibb.co.com/rtLzgMD/html5.webp' },
        { name: 'CSS3', imgSrc: 'https://i.ibb.co.com/hYZDWnW/css3.png' },
        { name: 'Tailwind CSS', imgSrc: 'https://i.ibb.co.com/8YQhy2f/tailwind.jpg' },
        { name: 'React Router', imgSrc: 'https://i.ibb.co.com/cCyrtDL/reactrouter.webp' },
        { name: 'Firebase', imgSrc: 'https://i.ibb.co.com/QckkNTR/firebase.png' },
      ],
      gitLink:"https://github.com/Shihab352/React-Dragon-News-Auth",
      liveSite:"https://dragon-news-5fdcfe.netlify.app/",
    },
  ];

  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-5xl font-roboto text-black font-bold mb-20 mt-20">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project}></ProjectCard>

          ))}
        </div>
        
        </div>
      </div>
    
  );
};

export default Project;