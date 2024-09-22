import React, { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/index.js";
import Card from '../components/eduCard.jsx'

const Tech = () => {  
  const [techName, setTechName] = useState('');

  const changeTechName = (name) =>{
    setTechName(name);
  }

  return (
    <div id='Tech' className="text-center">
      <h2 className='head-text mb-12'>Experience</h2>
      <h3 className='text-2xl mb-12 text-white'>{techName}</h3>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' onClick={()=> changeTechName(technology.name)} key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>

      <h2 className='head-text mt-12 '>Education</h2>
      <div className='flex flex-row'>
        <Card school={'University of Texas at Austin'} edu={'Economics'} date={'2021-2023'} gpa={'2.5'}/>
        <Card school={'Austin Community College'} edu={'Computer Programming'} date={'2023-2024'} gpa={'3.529'}/>
        <Card school={'University of Texas at Austin'} edu={'Full Stack Bootcamp'} date={'2024-2024'} gpa={'N/A'}/>
  
      </div>
      <h2 className='head-text mt-12'>Fluent in English and Spanish</h2>
    </div>
  );
};

export default SectionWrapper(Tech, "");
