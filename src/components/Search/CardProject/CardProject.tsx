"use client";

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Chip,
} from "@nextui-org/react";

interface Props {
  image?: string;
  title?: string;
  descriptionProject?: string;
  linkDemo?: string;
  linkGitHub?: string;
  tecnologyFront?: string;
  technologiesOther?: string[];
}

export const CardProject: React.FC<Props> = ({
  descriptionProject,
  image,
  linkDemo,
  linkGitHub,
  tecnologyFront,
  technologiesOther,
  title,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card className="min-w-[200px] max-w-[400px] bg-[var(--color-primaryDark)]">
      <CardBody className="overflow-visible ">
        <Image
          alt={title}
          className="object-cover rounded-xl w-[100%]"
          src={image}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large text-[var(--color-orange)] mb-[1rem]">
          {title}
        </h4>
        <p className="text-[var(--color-white)]">
          {showFullDescription
            ? descriptionProject
            : descriptionProject?.slice(0, 100) + "..."}
        </p>

        <p
          className="text-[var(--color-orange)] cursor-pointer mb-[1rem]"
          onClick={handleToggleDescription}
        >
          {showFullDescription ? "Leer menos..." : "Leer más..."}
        </p>

        {/* <small className="text-default-500">{tecnologyFront}</small> */}
      </CardHeader>
      <div className="flex flex-wrap mb-[2rem] pb- pt-2 px-4 max-w-[400px] gap-2">
        <Chip variant="faded" className="text-[var(--color-white)]">
          {tecnologyFront}
        </Chip>
        {technologiesOther?.map((technology) => (
          <Chip
            key={technology}
            variant="faded"
            className="text-[var(--color-white)]"
          >
            {technology}
          </Chip>
        ))}
      </div>
      <div className="flex mb-[2rem] pb-0 pt-1 px-4 gap-4">
        <Button
          className="bg-[var(--color-green)]"
          variant="light"
          href={linkDemo}
        >
          Link Proyecto
        </Button>
        <Button
          className="border-[var(--color-green)]"
          variant="bordered"
          href={linkGitHub}
        >
          Link GitHub
        </Button>
      </div>
    </Card>
  );
};
