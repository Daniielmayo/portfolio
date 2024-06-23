"use client";
import React, { useState } from "react";
import styles from "./Projects.module.css";
import { CardProject } from "../Search/CardProject/CardProject";
import { dataProjects } from "./dataProjects";
import { Button } from "@nextui-org/react";

export const Projects = () => {
  const [selectedTab, setSelectedTab] = useState("todos");

  const filteredProjects = dataProjects.filter((project) => {
    if (selectedTab === "todos") {
      return true;
    }
    return project.tecnologyFront.toLowerCase() === selectedTab;
  });

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };
  const frontEndTechnologies = Array.from(
    new Set(dataProjects.map((project) => project.tecnologyFront.toLowerCase()))
  );
  return (
    <section className={styles["Projec__content"]}>
      <h1 className={styles["project__title"]}>Proyectos</h1>
      <div className="flex flex-wrap gap-4 pb-0 pt-2 px-4">
        
        <Button
          onClick={() => handleTabChange("todos")}
          data-value="todos"
          variant={selectedTab === "todos" ? "solid" : "light"}
          className={
            selectedTab === "todos"
              ? "bg-[var(--color-orange)]"
              : "bg-transparent"
          }
        >
          Todos
        </Button>
        {frontEndTechnologies.map((tech) => (
          <Button
            key={tech}
            onClick={() => handleTabChange(tech)}
            data-value={tech}
            variant={selectedTab === tech ? "solid" : "light"}
            className={
              selectedTab === tech
                ? "bg-[var(--color-orange)]"
                : "bg-transparent"
            }
          >
            {tech.charAt(0).toUpperCase() + tech.slice(1)}
          </Button>
        ))}
      </div>
      {filteredProjects.map((data, index) => (
        <div key={index}>
          <CardProject {...data} />
        </div>
      ))}
    </section>
  );
};
