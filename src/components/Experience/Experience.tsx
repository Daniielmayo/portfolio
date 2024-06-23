"use client";
import React from "react";
import { CardExperience } from "../Search/CardExperience/CardExperience";
import { dataExperience } from "../Search/CardExperience/data";
import styles from "./Experience.module.css";
import { motion, AnimatePresence } from "framer-motion";

export const Experience = () => {
  return (
    <section className={styles["experience__container"]}>
      <h1 className={styles["experience__title"]}>Experiencia</h1>
      <AnimatePresence>
        {dataExperience.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: "some" }}
            // transition={{ duration: 1, delay: index * 0.1 }}
            transition={{
              ease: "circOut",
              duration: 1,
              x: { duration: 1 }
            }}
            key={index}
          >
            <div className="flex flex-col justify-center items-center gap-5">
              <CardExperience {...experience} />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </section>
  );
};
