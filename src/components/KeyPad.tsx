import Key from "./Key";

export default function KeyPad() {
  return (
    <div className=" bg-background-keypad rounded-md grid grid-rows-5 grid-cols-4 gap-4 p-5 sm:gap-6 sm:p-5">
      <Key text="7" />
      <Key text="8" />
      <Key text="9" />
      <Key text="DEL" type="secondary" />
      <Key text="4" />
      <Key text="5" />
      <Key text="6" />
      <Key text="+" />
      <Key text="1" />
      <Key text="2" />
      <Key text="3" />
      <Key text="-" />
      <Key text="." />
      <Key text="0" />
      <Key text="/" />
      <Key text="x" />
      <Key text="RESET" type="secondary" large={true} />
      <Key text="=" type="red" large={true} />
    </div>
  );
}
