import { Link } from 'react-router-dom';
import myImage from '../assets/slazzer-edit-image.png';

const About = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center text-white bg-slate-900 rounded-t-3xl py-9">
                <div className="w-full max-w-4xl mx-auto p-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full  md:w-1/2">
                            <img src={myImage} alt="Profile" className="border-2 border-white rounded-lg h-[500px] w-full shadow-lg" />
                        </div>
                        <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0 space-y-6">
                            <h2 className="text-5xl font-roboto font-bold mb-4 ">About Me</h2>
                            <p className='font-lato text-lg'>Hi there! I am
                                Sazzadul Karim

                                A passionate programmer and a Learner, born and brought up in Bangladesh. I am a Full Stack Web Developer with React.js, Node.js as my tech stack.
                                In 2021, I successfully completed my Graduation in Computer Science & Engerneering.
                                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                                Along with that, I also help people as a COACH on their journey of becoming a professional programmer.
                                I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.</p>
                            <div className='flex items-center gap-4'>
                                <a

                                    href="/public/Sazzadul_Karim.pdf"  // Link to your CV in the public folder
                                    target="_blank"  // Opens the CV in a new tab
                                    rel="noopener noreferrer"
                                    className=" btn text-lg font-lato text-white 
                   bg-gradient-to-r from-slate-700 from-10% via-slate-900 via-30% to-black to-90%  hover:from-black  hover:to-slate-900 "
                                >
                                    View My CV
                                </a>
                                <div className="flex  gap-4">
                                    <a
                                        href="https://github.com/Shihab352?tab=repositories"
                                        className="btn text-lg font-lato text-white 
                   bg-gradient-to-r from-slate-700 from-10% via-slate-900 via-30% to-black to-90%  hover:from-black  hover:to-slate-900 ">
                                        GitHub</a>

                                    <a
                                     
                                        href="https://www.linkedin.com/feed/"
                                        target="_blank"
                                        className="btn text-lg font-lato text-white 
                   bg-gradient-to-r from-slate-700 from-10% via-slate-900 via-30% to-black to-90%  hover:from-black  hover:to-slate-900 ">
                                        LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;