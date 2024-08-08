import { Experience, Home, NavbarTop, Projects, Skills } from "@/components";
import styles from "./page.module.css";
import { Contact } from "@/components/Contact/Contact";
import { Footer } from "@/components/Footer/Footer";
export default function HomePage() {
  return (
    <main>
      <NavbarTop />
      <div className={styles["containerHome"]}>
        <div className={styles["contentHome"]}>
          <section id="inicio">
            <Home />
          </section>
          <section id="skills" className="w-[100%]">
            <Skills />
          </section>
          <section id="experiencia">
            <Experience />
          </section>
          <section id="proyectos">
            <Projects />
          </section>
          <section id="contacto">
            <Contact />
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
