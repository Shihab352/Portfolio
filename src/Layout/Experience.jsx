import { Tilt } from 'react-tilt';
import companyLogo from '../assets/187835249_198370588917919_6503781788503956246_n.jpg';

const Experience = () => {
   
    return (
        <div>
             <div className="min-h-screen  flex flex-col items-center justify-center">
      <h2 className="text-5xl text-black font-roboto font-bold mb-10 lg:mt-20 ">Experience</h2>
      <Tilt  className="Tilt lg:w-[1100px]"
        options={{ max: 25, scale: 1.05 }}>
      <div className=" w-full p-5">
      <div className='flex justify-center bg-slate-900 p-5 border-b' >
        <img src={companyLogo} alt="" className='w-80'/>
       </div>
          <div  className="p-4 space-y-2 bg-slate-600 text-white hover:shadow-lg transition-all duration-300">
          
            <h3 className="text-2xl font-roboto text-center font-bold">Fletofix</h3>
            <p className='text-center text-lg font-lato'> <span className='font-bold text-lg '>Fletofix :</span> B2B Business Development Company. Fletofix help businesses grow online with customized solutions.</p>
            <h1 className='text-center font-bold text-lg font-lato'>Assistant IT Engeneer </h1>
            <p className='text-center text-lg font-lato'> <span className='font-bold '>Duration :</span> April 2023 - Augest 2023</p>
            <p className='text-center font-bold font-lato text-lg underline'>Responsibilities</p>
            <div>
<ol  role="list" className='marker:text-sky-400 list-disc pl-4 text-lg font-lato' >
  <li >Install, Configure and maintenance Office's IT devices.</li>
  <li>Desk & Remote Support to the staffs.</li>
  <li>Proper Documentation for each IT devices.</li>
  <li>Report to the senior IT Engineer..</li>
</ol>
            </div>
          </div>
        
      </div>
      </Tilt>
    </div>
        </div>
    );
};

export default Experience;