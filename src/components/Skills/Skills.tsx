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
    <section className={styles['skills__container']}>
      <h1 className={styles['skills__title']}>Skills</h1>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        loop={true}
        modules={[Autoplay, Navigation]}
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
