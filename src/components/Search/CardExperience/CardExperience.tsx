import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,
} from "@nextui-org/react";
import IconWorkAlt from "@/components/WorkIcon";

interface Props {
  image?: string;
  rol?: string;
  name?: string;
  descriptionRol?: string;
  time?: string;
}

export const CardExperience: React.FC<Props> = ({
  image,
  rol,
  name,
  descriptionRol,
  time,
}) => {
  return (
    <Card className="min-w-[200px] max-w-[400px] bg-[var(--color-primaryDark)]">
      <CardHeader className="flex gap-3">
        {image ? (
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src={image} // Aquí pasa solo la URL de la imagen
            width={40}
          />
        ) : (
          <IconWorkAlt height={40} width={40} /> // Renderiza el ícono si no hay imagen
        )}
        <div className="flex flex-col">
          <p className="text-md">{name}</p>
          <p className="text-small text-[var(--color-orange)] font-bold">
            {rol}
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-small text-default-500 mb-4">{time}</p>
        <p>{descriptionRol}</p>
      </CardBody>
    </Card>
  );
};
