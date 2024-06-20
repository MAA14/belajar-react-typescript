import React from "react";

/**
 * Kita dapat mengganti value dari props as untuk menghasilkan tag yang berbeda
 */

/**
 * React.ElementType itu merupakan type untuk tag html seperti <p> dll...
 */
type TextBasicProps<E extends React.ElementType> = {
  size?: string;
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

/**
 * Jangan lupa gunakan Omit untuk mengecualikan props yang sama dengan BasicProps kita sehingga tidak terjadi konflik
 */
type TextProps<E extends React.ElementType> = TextBasicProps<E> &
  Omit<React.ComponentProps<E>, keyof TextBasicProps<E>>; // gunakan keyof untuk Omit seluruh props dari sebuah type

// Set default value dari E = div
export const TextPolymorphic = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
  ...rest
}: TextProps<E>) => {
  const Component = as || "div"; // tetep set default value di dalam function supaya tidak error

  return (
    <Component className={`text ${size} ${color}`} {...rest}>
      {children}
    </Component>
  );
};
