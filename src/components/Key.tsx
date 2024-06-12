type functionType = () => void;

interface Props {
  type?: string;
  text: string;
  large?: boolean;
  func?: functionType;
}

export default function Key({
  type = "normal",
  text,
  large = false,
  func,
}: Props) {
  return (
    <div
      onClick={func}
      className={` ${large && " col-span-2"} w-full h-full  relative`}
    >
      <div
        className={` bg-digits-key-dark w-full h-full rounded-lg top-1 absolute z-10 ${
          type === "secondary" && " bg-reset-key-dark"
        } ${type === "red" && " bg-equal-key-dark "}`}
      ></div>
      <div
        className={` flex justify-center items-center rounded-lg  text-3xl font-bold h-full  bg-digits-key text-keys-text relative z-20 transition-all duration-75 active:translate-y-1 ${
          type === "secondary" && " bg-reset-key text-text-text"
        } ${type === "red" && " bg-equal-key text-text-text "}`}
      >
        <p className=" select-none">{text}</p>
      </div>
    </div>
  );
}
