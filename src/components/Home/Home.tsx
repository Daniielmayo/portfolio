"use client";
import Image from "next/image";
import ImageProfile from "../../../public/Home/IMG-20230131-WA0037.jpg";
import styles from "./Home.module.css";
import IconWhatsappLine from "../Search/Icons/Home/WhatsAapIcon";
import IconLinkedin from "../Search/Icons/Home/LinkedIndIcon";
import { ButtonComponent } from "../Search/Button/Button";
import IconIconDownload from "../Search/Icons/Home/Download";

export const Home = () => {
  return (
    <section className={styles["home__container"]}>
      <div className={styles["home__content-image"]}>
        <Image
          src={ImageProfile}
          alt="Profile Image"
          className={styles["home__image--portfolio"]}
        />
        <h1 className={styles["home__title--portfolio"]}>
          Hola soy <b>Daniel Mayo</b> desarrollador <b>Full-Stack</b>
        </h1>
      </div>
      <div className={styles["home__content--paragraph"]}>
        <p className={styles["home__paragraph-portfolio"]}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
          corrupti laudantium exercitationem sint molestiae nisi! Repellendus
          minus, dolores laboriosam placeat soluta officia illo voluptas
          doloremque architecto, obcaecati voluptatum cumque eum?
        </p>
        <div className={styles["home__content--icons"]}>
          <IconWhatsappLine className={styles["home__whatsaap--icon"]} />
          <IconLinkedin className={styles["home__whatsaap--icon"]} />
          <ButtonComponent
            className={styles["home__cv--button"]}
            icon={<IconIconDownload className={styles["home__icon--button"]} />}
            iconPosition="right"
            onClick={() => console.log("Button clicked")}
          >
            Descargar CV
          </ButtonComponent>
        </div>
      </div>
    </section>
  );
};
