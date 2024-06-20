/**
 * Ini contoh hardcode type positions
 * type PositionsType =
 *    | "left-center" | "left-bottom" | "right-center" | "right-bottom" | "top-center" | "top-right" | "bottom-center" | "bottom-right" | "center"
 *    | "center-left" | "center-right" | "center-top" | "center-bottom";
 */

/**
 * Dengan template literals kita tidak perlu hardcode satu per satu
 */
type HorizontalPositions = "left" | "center" | "right";
type VerticalPositions = "top" | "center" | "bottom";

/**
 * Kita dapat menggunakan template literals "${}" untuk menggenerate value dari penggabungan 2 type atau lebih
 * Kita juga bisa menambahkan exclude untuk mengecualikan value yang tidak kita butuhkan
 * Lalu kita bisa gunakan Union "|" untuk mengganti atau menambahkan value sesuai kebutuhan
 */
type NotificationProps = {
  position:
    | Exclude<`${HorizontalPositions}-${VerticalPositions}`, "center-center">
    | "center"; // menghapus center-center lalu menambahkan center
  message: string;
  title: string;
  type: "success" | "error" | "warning";
};

// Cara Exclude lebih dari 1
// type NotificationProps = {
//     position: Exclude<Exclude<Exclude<`${HorizontalPositions}-${VerticalPositions}`, "center-center">, "left-top">, "bottom-left"> | "center";
//     message: string;
//     title: string;
//     type: "success" | "error" | "warning";
//   };

import "./notification.css";
import "../../assets/success-filled.svg";
export const Notification = ({
  position,
  message,
  type,
  title,
}: NotificationProps) => {
  return (
    <div className="container">
      <div className={`notification ${position} ${type}`}>
        <div className="iconContainer">
          {type === "success" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="undefined"
              height="undefined"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
              />
            </svg>
          ) : type === "error" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="undefined"
              height="undefined"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="undefined"
              height="undefined"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.884 2.532c-.346-.654-1.422-.654-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .883-1.467L12.884 2.532zM13 18h-2v-2h2v2zm-2-4V9h2l.001 5H11z"
              />
            </svg>
          )}
        </div>
        <div className="textContainer">
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
