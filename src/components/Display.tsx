import { useAppSelector } from "../store/hooks";
export default function Display() {
  const text = useAppSelector((state) => state.calculator.expression);
  return (
    <div className=" bg-background-screen rounded-md flex justify-end items-center px-9">
      <h2 className=" text-display-text text-5xl font-semibold">{text}</h2>
    </div>
  );
}
