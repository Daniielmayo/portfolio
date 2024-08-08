"use client";
import React from "react";
import { CardExperience } from "../Search/CardExperience/CardExperience";
import { dataExperience } from "../Search/CardExperience/data";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles["experience__container"]}>
      <h1 className={styles["experience__title"]}>Experiencia</h1>
      <div className={styles["experience__contentCards"]}>
        {dataExperience.map((experience, index) => (
          <CardExperience {...experience} key={index} />
        ))}
      </div>
    </section>
  );
};
