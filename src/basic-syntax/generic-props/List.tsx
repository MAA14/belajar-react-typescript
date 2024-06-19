import { ReactNode } from "react";

type ListProps<T> = {
  items: T[];
};

export const List = <T extends { id: number; element: ReactNode }>({
  items,
}: ListProps<T>) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => console.log(item)}>
          {item.element}
        </li>
      ))}
    </ul>
  );
};

/**
 * Ini contoh bikin generic type props yang bisa nerima value dan object dengan struktur apapun (termasuk ReactNode) tapi harus ada id: number nya
 * FYI: ReactNode sendiri terdiri atas JSX, HTMLElement, string, number, boolean
 * FYI: ReactNode = string | number | boolean | ReactNode
 * FYI: ReactNode != {}, dia gk bisa nerima object literal sebagai HTML element, jadi gunakan JSON.stringify() untuk mengubahnya menjadi String
 */
type List2Props<T> = {
  items: Array<{ id: number } & T>;
};

export const List2 = <T extends object>({ items }: List2Props<T>) => {
  return (
    <ul>
      {items.map((item: { id: number } & T) => (
        <li key={item.id} onClick={() => console.log(item)}>
          {JSON.stringify(item)}
        </li>
      ))}
    </ul>
  );
};
