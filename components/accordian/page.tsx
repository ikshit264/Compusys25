"use client"
import React, { useState } from 'react';
import Project from './project'; 
import Modal from './modal';
// import Modal from './Modal'; // Make sure this is correctly defined

const Accordion = () => {
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
    {
        title:"Empower Through Knowledge",
        src: "image5.png",
        color: "#706D63",
      },
      {
        title:"Forge Lasting Connections:",
        src: "image6.png",
        color: "#706D63",
      },



  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className='p-4'>
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
