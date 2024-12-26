'use client';
import React, { useState } from 'react';
import Project from './project/Project';
import Modal from './modal/Modal';

const Accordian = () => {
  const projects = [
    {
      title: "Pioneering Excellence",
      src: "c2montreal.png",
      color: "#000000",
      tag: "Teri",
      tagColor: "#FFD700", // Unique color for the tag
      date: "1-2-2030",
    },
    {
      title: "Inspiring Futures",
      src: "officestudio.png",
      color: "#8C8C8C",
      tag: "Teri",
      tagColor: "#FF5733",
      date: "1-2-2030",
    },
    {
      title: "Uniting Diversity",
      src: "locomotive.png",
      color: "#EFE8D3",
      tag: "Maa",
      tagColor: "#33FF57",
      date: "1-2-2030",
    },
    {
      title: "Organize Impactful Events",
      src: "image4.png",
      color: "#706D63",
      tag: "Ki",
      tagColor: "#5733FF",
      date: "1-2-2030",
    },
    {
      title: "Empower Through Knowledge",
      src: "image5.png",
      color: "#706D63",
      tag: "Puja",
      tagColor: "#FF33A1",
      date: "1-2-2030",
    },
    {
      title: "Forge Lasting Connections",
      src: "image6.png",
      color: "#706D63",
      tag: "Kru",
      tagColor: "#33FFF3",
      date: "1-2-2030",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  // Helper function to format the date
  const formatDate = (dateString: string) => {
    const [day, month, year] = dateString.split("-");
    const formattedDate = new Date(Number(year), Number(month) - 1, Number(day));
    return formattedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

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
            color={project.tagColor}
            date={formatDate(project.date)} // Pass formatted date
          />
        ))}
      </div>

      {/* Modal */}
      {modal.active && <Modal modal={modal} projects={projects} setModal={setModal} />}
    </main>
  );
};

export default Accordian;
