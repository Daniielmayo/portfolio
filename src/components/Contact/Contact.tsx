"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Button, Input, Textarea } from "@heroui/react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validar que todos los campos estén llenos
    if (!name || !email || !description) {
      Toastify({
        text: "Por favor, completa todos los campos.",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #f44336, #f44336)",
        },
      }).showToast();
      return;
    }

    setIsSubmitting(true); // Deshabilita el botón
    Toastify({
      text: "Enviado ...",
      // duration: 3000,
      style: {
        background: "linear-gradient(to right, #0088ff , #0088ff )",
      },
    }).showToast();
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: name,
          email: email,
          textarea: description,
        }),
      });

      if (response.status === 200) {
        Toastify({
          text: "Enviado correctamente",
          duration: 3000,
          style: {
            background: "linear-gradient(to right, #4caf50, #4caf50)",
          },
        }).showToast();
      } else {
        Toastify({
          text: "Upss algo salió mal, puedes contactarme por WhatsApp",
          duration: 3000,
          style: {
            background: "linear-gradient(to right, #9c0d38, #9c0d38)",
          },
        }).showToast();
      }
    } catch (error) {
      Toastify({
        text: "Ocurrió un error. Intenta de nuevo.",
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #9c0d38, #9c0d38)",
        },
      }).showToast();
    } finally {
      setIsSubmitting(false); // Vuelve a habilitar el botón después de la respuesta
    }
  };
  return (
    <section className={styles["container__contact"]}>
      <h2 className={styles["contact__title"]}>Contacto</h2>
      <form
        action=""
        onSubmit={handleSubmit}
        className={styles["container__form"]}
      >
        <Input
          type="text"
          label="Nombre"
          variant={"underlined"}
          className="w-[300px] md:w-[400px] text-[22px]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          label="Email"
          variant={"underlined"}
          className="w-[300px] md:w-[400px] "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textarea
          label="Descripción"
          placeholder=" "
          className="w-[300px] md:w-[400px] text-[22px]"
          variant="underlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {isSubmitting ? (
          <Button className={styles["button_submit"]} isLoading>
            Enviando
          </Button>
        ) : (
          <Button
            color="danger"
            className={styles["button_submit"]}
            type="submit"
            disabled={isSubmitting}
          >
            Enviar
          </Button>
        )}
      </form>
    </section>
  );
};
