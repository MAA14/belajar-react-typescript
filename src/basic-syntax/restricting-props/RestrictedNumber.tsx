type NumberType = {
  value: number;
};

type PositiveNumberType = NumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumberType = NumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type ZeroNumberType = NumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RestrictedNumberProps =
  | PositiveNumberType
  | NegativeNumberType
  | ZeroNumberType;

export const RestrictedNumber = (props: RestrictedNumberProps) => {
  return (
    <p>
      {props.value} is{" "}
      {props.isPositive ? "positive" : props.isNegative ? "negative" : ""}{" "}
      {props.isZero ? "zero" : ""}
    </p>
  );
};

/**
 * Component untuk menampilkan nilai number dengan prop yang dibatasi
 *
 * @example
 * <RestrictedNumber
 *  value={10}
 *  isPositive={true}
 * />
 *
 * @example
 * <RestrictedNumber
 *  value={10}
 *  isPositive={true}
 * />
 *
 * @example
 * <RestrictedNumber
 *  value={10}
 *  isNegative={true}
 * />
 *
 * @throws {TypeError} Jika prop yang diberikan lebih dari 1 type
 * @example
 * <RestrictedNumber
 *  value={0}
 *  isPositive={true}
 *  isNegative={true}
 *  isZero={true}
 * />
 */
