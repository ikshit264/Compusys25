'use client';
import React, { useState } from 'react';
import Project from './project/Project';
import Modal from './modal/Modal';

const Accordian = () => {
  const projects = [
    {
      title: "Manzar 2024",
      src: "manzar24.jpg",
      color: "#000000",
      tag: "departmental freshers", // Unique color for the tag
      date: "14-10-2024",
    },
    {
      title: "CSPL",
      src: "CSPL.jpg",
      color: "#8C8C8C",
      tag: "one day cricket tournament",
      date: "18-10-2024",
    },
    {
      title: "Polaris 2024",
      src: "polaris24.jpg",
      color: "#EFE8D3",
      tag: "departmental cutltural and tech fest",
      date: "29-01-2024",
    },
    {
      title: "Orphanage Visit",
      src: "ovisit24.jpg",
      color: "#706D63",
      tag: "annual social service",
      date: "12-05-2024",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <main className="w-full mt-12">
      <div className={`flex flex-col items-center justify-center`}>

        {/* Project List */}
        {projects.map((project, index) => (
          <Project
            key={index}
            index={index}
            title={project.title}
            setModal={setModal}
            tag={project.tag}
            date={project.date} // Pass formatted date
          />
        ))}
      </div>

      {/* Modal */}
      {modal.active && <Modal modal={modal} projects={projects} setModal={setModal} />}
    </main>
  );
};

export default Accordian;
