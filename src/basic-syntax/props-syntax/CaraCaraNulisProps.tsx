/**
 * Cara pertama dengan menggunakan type sebagai struktur propsnya
 */
type TextProps = {
  className: string;
  text: string;
};

export function Text(props: TextProps) {
  return <p className={props.className}> {props.text} </p>;
}

// Cara kedua dengan destructuring langsung propsnya
export function Text2({ className, text }: TextProps) {
  return <p className={className}> {text} </p>;
}

// Cara ketiga destructuring misah (biasanya kalo propsnya ada banyak atau untuk mempermudah dibacanya)
export function Text3(props: TextProps) {
  const { className, text } = props;
  return <p className={className}> {text} </p>;
}
