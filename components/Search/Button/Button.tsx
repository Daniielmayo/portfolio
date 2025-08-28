"use client";
import { Button } from "@heroui/button";
import styles from "./Button.module.css";

interface ButtonComponentProps {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  color?:
    | "primary"
    | "default"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  className = "",
  icon,
  iconPosition = "left",
  onClick,
  color = "primary",
}) => {
  // const buttonClass = `${styles["button"]} ${className}`;
  return (
    <div className="flex gap-4 items-center">
      <Button color={color}>
        {icon && iconPosition === "left" && (
          <span className={styles["icon-left"]}>{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className={styles["icon-right"]}>{icon}</span>
        )}
      </Button>
    </div>
  );
};
