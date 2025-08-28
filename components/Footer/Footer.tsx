import React from "react";

import styles from "./Footer.module.css";
import IconGithub from "../Icons/GitHubIcon";
import Link from "next/link";
import { IconLinkedin, IconWhatsappLine } from "../Search";

export const Footer = () => {
  return (
    <section className={styles["container__footer"]}>
      <p className={styles["footer__title"]}>
        © Desarrollado con cariño 💚 Daniel Mayo
      </p>
      <div className={styles["footer__icons--container"]}>
        <Link
          href="https://api.whatsapp.com/send/?phone=573192476627" // Reemplaza XXXXXXXXXXXX con tu número de WhatsApp en formato internacional
          target="_blank" // Esto abrirá el enlace en una nueva pestaña
          rel="noopener noreferrer" // Buenas prácticas para seguridad y rendimiento
        >
          <div className={styles["footer__icon"]}>
            <IconWhatsappLine />
            WhatsApp
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/cdanielvmayo/" // Reemplaza XXXXXXXXXXXX con tu número de WhatsApp en formato internacional
          target="_blank" // Esto abrirá el enlace en una nueva pestaña
          rel="noopener noreferrer"
        >
          <div className={styles["footer__icon"]}>
            <IconLinkedin /> Linkedin
          </div>
        </Link>
        <Link
          href="https://github.com/Daniielmayo" // Reemplaza XXXXXXXXXXXX con tu número de WhatsApp en formato internacional
          target="_blank" // Esto abrirá el enlace en una nueva pestaña
          rel="noopener noreferrer"
        >
          <div className={styles["footer__icon"]}>
            <IconGithub />
            GitHub
          </div>
        </Link>
      </div>
    </section>
  );
};
