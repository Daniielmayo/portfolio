"use client";
import Image from "next/image";
import styles from "./Home.module.css";
import IconWhatsappLine from "../Icons/WhatsAapIcon";
import IconLinkedin from "../Icons/LinkedIndIcon";
import { ButtonComponent } from "../Search/Button/Button";
import IconIconDownload from "../Search/Icons/Home/Download";
import Link from "next/link";

export const Home = () => {
  return (
    <section className={styles["home__container"]}>
      <div className={styles["home__content-image"]}>
        <Image
          src={"/public/Home/IMG-20230131-WA0037.jpg"}
          alt="Profile Image"
          className={styles["home__image--portfolio"]}
          width={200}
          height={200}
        />
        <h1 className={styles["home__title--portfolio"]}>
          Hola soy <b>Daniel Mayo</b> desarrollador <b>Full-Stack</b>
        </h1>
      </div>
      <div className={styles["home__content--paragraph"]}>
        <div className={styles["home__container__text"]}>
          <p className={styles["home__paragraph-portfolio"]}>
            Soy desarrollador Full Stack con casi 2 años de experiencia en el
            diseño, desarrollo e implementación de aplicaciones web escalables y
            de alto rendimiento.
            <br />
            He trabajado en proyectos creados desde cero como aplicaciones
            multimedia para clases online, también en plataformas de e-commerce
            con paneles administrativos.
          </p>
          <div className={styles["home__content--icons"]}>
            <Link
              href="https://api.whatsapp.com/send/?phone=573192476627" // Reemplaza XXXXXXXXXXXX con tu número de WhatsApp en formato internacional
              target="_blank" // Esto abrirá el enlace en una nueva pestaña
              rel="noopener noreferrer" // Buenas prácticas para seguridad y rendimiento
            >
              <IconWhatsappLine className={styles["home__whatsaap--icon"]} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/cdanielvmayo/" // Reemplaza XXXXXXXXXXXX con tu número de WhatsApp en formato internacional
              target="_blank" // Esto abrirá el enlace en una nueva pestaña
              rel="noopener noreferrer"
            >
              <IconLinkedin className={styles["home__whatsaap--icon"]} />
            </Link>
            <a
              href="https://drive.google.com/file/d/1N3Kr84JlSMRLhIZA3XAJFgA9JkSnv4er/view?usp=sharing" // Reemplaza con la ruta correcta a tu archivo
              download="Daniel_Mayo_CV.pdf" // Opcional: cambia el nombre del archivo descargado
              target="_blank"
            >
              <ButtonComponent
                className={styles["home__cv--button"]}
                icon={
                  <IconIconDownload className={styles["home__icon--button"]} />
                }
                iconPosition="right"
              >
                Descargar CV
              </ButtonComponent>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
