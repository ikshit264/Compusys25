"use client"
import React, { useState } from 'react';
import Project from './project/Project'; 
import Modal from './modal/Modal';

const Accordian = () => {
  const projects = [
    {
      title: "Pioneering Excellence",
      src: "c2montreal.png",
      color: "#000000",
    },
    {
      title: "Inspiring Futures",
      src: "officestudio.png",
      color: "#8C8C8C",
    },
    {
      title: "Uniting Diversity",
      src: "locomotive.png",
      color: "#EFE8D3",
    },
    {
      title:"Organize Impactful Events",
      src: "image4.png",
      color: "#706D63",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className='w-full mt-12'>
      <div className='flex flex-col items-center'>
        {projects.map((project, index) => (
          <Project
            index={index}
            title={project.title}
            setModal={setModal}
            key={index}
          />
        ))}
      </div>
      {modal.active && <Modal modal={modal} projects={projects} setModal={setModal} />}
    </main>
  );
};

export default Accordian;
