"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation } from "swiper/modules";
import {
  IconExpress,
  IconGit,
  IconGithub,
  IconJavascript,
  IconJest,
  IconLogoCss3,
  IconMongodb,
  IconNextjs,
  IconNodeJs,
  IconReact,
  IconTailwind,
} from "../Search/Icons/Skills";
import styles from "./Skills.module.css";

export const Skills = () => {
  const icons = [
    { icon: <IconReact key="react" />, text: "React" },
    { icon: <IconNextjs key="NextJs" />, text: "Next.js" },
    { icon: <IconJavascript key="JavaScript" />, text: "JavaScript" },
    { icon: <IconJest key="IconJest" />, text: "Jest" },
    { icon: <IconLogoCss3 key="IconLogoCss3" />, text: "CSS3" },
    { icon: <IconTailwind key="IconTailwind" />, text: "Tailwind CSS" },
    { icon: <IconNodeJs key="IconNodeJs" />, text: "Node.js" },
    { icon: <IconExpress key="IconExpress" />, text: "Express.js" },
    { icon: <IconMongodb key="IconMongodb" />, text: "MongoDB" },
    { icon: <IconGit key="IconGit" />, text: "Git" },
    { icon: <IconGithub key="IconGithub" />, text: "GitHub" },
  ];

  return (
    <section id="skills" className={styles["skills__container"]}>
      <h1 className={styles["skills__title"]}>Skills</h1>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 1000, // Tiempo de espera entre cada slide
          disableOnInteraction: false,
          // speed: 500, // Velocidad de la transición (en milisegundos)
        }}
        loop={true}
        speed={1000} // Ajusta la velocidad de la transición entre slides
        modules={[Autoplay, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 4,
          },
          // Cuando la ventana es >= 768px
          768: {
            slidesPerView: 6,
          },
          // Cuando la ventana es >= 1024px
          1024: {
            slidesPerView: 8,
          },
          // Cuando la ventana es >= 1440px
          1440: {
            slidesPerView: 10,
          },
        }}
        className={styles["skills__content--Icons"]}
      >
        {icons.map(({ icon, text }, index) => (
          <SwiperSlide key={index}>
            <div className={styles["skill__content"]}>
              {icon}
              <p className={styles["skills__name"]}>{text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
