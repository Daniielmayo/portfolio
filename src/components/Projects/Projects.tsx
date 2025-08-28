"use client";
import React, { useState } from "react";
import styles from "./Projects.module.css";
import { CardProject } from "../Search/CardProject/CardProject";
import { dataProjects } from "./dataProjects";
import { Button } from "@heroui/react";

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
      <div className="flex flex-wrap justify-center gap-4 pb-0 pt-2 px-4">
        <Button
          onClick={() => handleTabChange("todos")}
          data-value="todos"
          variant={selectedTab === "todos" ? "solid" : "light"}
          className={`${styles.button} ${
            selectedTab === "todos" ? styles["button-selected"] : ""
          }`}
        >
          Todos
        </Button>
        {frontEndTechnologies.map((tech) => (
          <Button
            key={tech}
            onClick={() => handleTabChange(tech)}
            data-value={tech}
            variant={selectedTab === tech ? "solid" : "light"}
            className={`${styles.button} ${
              selectedTab === tech ? styles["button-selected"] : ""
            }`}
          >
            {tech.charAt(0).toUpperCase() + tech.slice(1)}
          </Button>
        ))}
      </div>
      <div className={styles["projects__cards"]}>
        {filteredProjects.map((data, index) => (
          <CardProject {...data} key={index} />
        ))}
      </div>
    </section>
  );
};
