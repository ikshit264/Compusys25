"use client"
import React, { useState } from 'react';
import Project from './project/Project'; 
import Modal from './modal/Modal';

const Accordion = () => {
  const projects = [
    {
      title: "Pioneering Excellence",
      src: "/assets/images/c2montreal.png",
      color: "#000000",
    },
    {
      title: "Inspiring Futures",
      src: "/assets/images/officestudio.png",
      color: "#8C8C8C",
    },
    {
      title: "Uniting Diversity",
      src: "/assets/images/locomotive.png",
      color: "#EFE8D3",
    },
    {
      title:"Organize Impactful Events",
      src: "/assets/images/image4.png",
      color: "#706D63",
    },
    {
        title:"Empower Through Knowledge",
        src: "/assets/images/image5.png",
        color: "#706D63",
      },
      {
        title:"Forge Lasting Connections:",
        src: "/assets/images/image6.png",
        color: "#706D63",
      },



  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className='p-6'>
      <div>
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

export default Accordion;
