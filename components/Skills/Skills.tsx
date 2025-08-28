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
  const repeatedIcons = [...icons, ...icons];
  return (
    <section id="skills" className={styles["skills__container"]}>
      <h1 className={styles["skills__title"]}>Skills</h1>
      <Swiper
        loop={true}
        speed={6000} // más alto = más lento y fluido
        autoplay={{
          delay: 0, // sin pausa entre slides
          disableOnInteraction: false,
        }}
        allowTouchMove={false} // desactiva el arrastre manual
        slidesPerView="auto" // para que se muestren como "carrousel"
        spaceBetween={20}
        modules={[Autoplay]}
        className={styles["skills__content--Icons"]}
      >
        {repeatedIcons.map(({ icon, text }, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "auto" }} // importante: hace que slides se ajusten a su contenido
          >
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
