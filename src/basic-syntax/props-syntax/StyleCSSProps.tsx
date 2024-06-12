/**
 * Cara Styling css tapi lewat style variable
 * biasanya jika kita ingin punya CSS variable yang ingin dikirim ke element
 */

import React from "react";

class ColorRGB {
  private colorRGB: string;
  private R: number;
  private G: number;
  private B: number;

  constructor(R: number, G: number, B: number) {
    this.R = R;
    this.G = G;
    this.B = B;
    this.colorRGB = `rgba(${R}, ${G}, ${B}, 1)`;
    return;
  }

  get() {
    return this.colorRGB;
  }

  getWithAlpha(A: number) {
    return `rgba(${this.R}, ${this.G}, ${this.B}, ${A})`;
  }
}

// Contoh CSS Variable (bagusnya ditaro di file terpisah kemudian di import kesini)
const Colors = {
  PRIMARY: new ColorRGB(140, 24, 145),
  SECONDARY: new ColorRGB(255, 255, 255),
};

// Bikin Type Propsnya
type CardProps = {
  className: string;
  style?: React.CSSProperties; // Ini artinya kita gk perlu masukin satu-satu sebagai props tapi di handle sama react untuk styling CSSnya
};

/**
 * @IMPORTANT
 * style butuh dua pasang curly braces "{{}}" jika kita ingin mengisinya dengan manual, seperti contoh ini
 */
export function Card({ className }: CardProps) {
  return (
    <div
      className={`card ${className}`}
      style={{
        backgroundColor: Colors.PRIMARY.get(),
      }}
    >
      <p>Ini paragraph</p>
    </div>
  );
}

/**
 * @IMPORTANT
 * style hanya butuh satu pasang curly braces "{}" jika kita ingin mengisinya dengan sebuah object
 */
export function Card2({ className, style }: CardProps) {
  return (
    <div className={`card ${className}`} style={style}>
      <p>Ini paragraph</p>
    </div>
  );
}

/**
 * @IMPORTANT
 * Contoh lain cara Styling component
 */
export function Card3({ className, style }: CardProps) {
  return (
    <div
      className={`card ${className}`}
      style={{
        backgroundColor: Colors.PRIMARY.get(),
        ...style,
      }}
    >
      <p>Ini paragraph</p>
    </div>
  );
}
