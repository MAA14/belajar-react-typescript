import React from "react";

/**
 * React.ComponentProps<"button"> adalah type yang memiliki semua properties dari React.ButtonHTMLAttributes
 */
type CustomButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">; // Omit untuk mengecualikan property yang tidak ingin di override dengan & type datanya

/**
 * Kita menggunakan Omit untuk mengecualikan property yang tidak ingin di override type datanya dengan &
 * jika tanpa Omit maka type data children di CustomButton component (bukan type CustomButtonProps) adalah :
 * children: string & ReactNode
 * namun dengan Omit akan menjadi :
 * children: string
 */

/**
 * Kita gunakan ...rest untuk mengambil semua properties yang ada pada React.ButtonHTMLAttributes tanpa harus menyebutkan satu per satu
 * lalu kita pasangkan <button {...rest}> untuk menggunakan semua properties tanpa harus menyebutkan satu per satu
 * @NOTE
 * dengan cara seperti ini kita bisa memberikan property seperti onClick, onMouseOver, dan lain-lain pada <CustomButton />
 */
export const CustomButton = ({
  variant,
  children,
  ...rest
}: CustomButtonProps) => {
  return (
    <button className={`custom-button ${variant}`} {...rest}>
      {children}
    </button>
  );
};
