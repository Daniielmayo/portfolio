"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function NavbarTop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("inicio"); // Estado para la sección activa

  const menuItems = [
    { label: "Inicio", id: "inicio" },
    { label: "Skills", id: "skills" },
    { label: "Experiencia", id: "experiencia" },
    { label: "Proyectos", id: "proyectos" },
    { label: "Contacto", id: "contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => ({
        id: item.id,
        offset: document.getElementById(item.id)?.offsetTop || 0,
      }));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentSection = sections.reduce((prev, curr) =>
        scrollPosition >= curr.offset ? curr : prev
      );

      setActiveId(currentSection?.id || "inicio"); // Actualiza el ID de la sección activa
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Chequeo inicial

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuItems]);

  const scrollToSection = (id: any) => {
    console.log(id);
    const offsetTop = document.getElementById(id)?.offsetTop || 0;
    window.scrollTo({
      top: offsetTop - 0, // Ajusta este valor según el tamaño de tu encabezado fijo
      behavior: "smooth",
    });
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent"
    >
      <NavbarContent className="md:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="md:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">Daniel Mayo</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Menú para desktop */}
      <NavbarContent className="hidden md:flex gap-4" justify="end">
        <NavbarBrand>
          <p className="font-bold text-inherit">Daniel Mayo</p>
        </NavbarBrand>
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link
              className={`${styles.navbarLink} ${
                activeId === item.id ? styles.active : ""
              }`}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
                // Prevent activeId update for Skills click
                if (item.id !== "skills") {
                  setActiveId(item.id);
                }
              }}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Menú para mobile */}
      <NavbarMenu className="bg-[var(--color-primaryDark)]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className={`${styles.navbarLink} ${
                activeId === item.id ? styles.active : ""
              }`}
              href={`#${item.id}`}
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
