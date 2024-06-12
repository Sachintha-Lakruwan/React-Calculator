import Key from "./Key";
import { useAppDispatch } from "../store/hooks";
import {
  pressButton,
  pressDel,
  pressDivide,
  pressDot,
  pressEqual,
  pressMinus,
  pressPlus,
  pressReset,
  pressX,
} from "../store/slices/calculatorSlice";
import { useEffect } from "react";

export default function KeyPad() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  function handleKeyDown(e: KeyboardEvent) {
    console.log(e.key);
    switch (e.key) {
      case "1":
        dispatch(pressButton("1"));
        break;
      case "2":
        dispatch(pressButton("2"));
        break;
      case "3":
        dispatch(pressButton("3"));
        break;
      case "4":
        dispatch(pressButton("4"));
        break;
      case "5":
        dispatch(pressButton("5"));
        break;
      case "6":
        dispatch(pressButton("6"));
        break;
      case "7":
        dispatch(pressButton("7"));
        break;
      case "8":
        dispatch(pressButton("8"));
        break;
      case "9":
        dispatch(pressButton("9"));
        break;
      case "0":
        dispatch(pressButton("0"));
        break;
      case ".":
        dispatch(pressDot());
        break;
      case "/":
        dispatch(pressDivide());
        break;
      case "x":
        dispatch(pressX());
        break;
      case "*":
        dispatch(pressX());
        break;
      case "-":
        dispatch(pressMinus());
        break;
      case "+":
        dispatch(pressPlus());
        break;
      case "Enter":
        dispatch(pressEqual());
        break;
      case "Backspace":
        dispatch(pressDel());
        break;
      case "Delete":
        dispatch(pressDel());
        break;
      case " ":
        dispatch(pressReset());
        break;
    }
  }
  return (
    <div className=" bg-background-keypad rounded-md grid grid-rows-5 grid-cols-4 gap-4 p-5 sm:gap-6 sm:p-5">
      <Key text="7" func={() => dispatch(pressButton("7"))} />
      <Key text="8" func={() => dispatch(pressButton("8"))} />
      <Key text="9" func={() => dispatch(pressButton("9"))} />
      <Key text="DEL" type="secondary" func={() => dispatch(pressDel())} />
      <Key text="4" func={() => dispatch(pressButton("4"))} />
      <Key text="5" func={() => dispatch(pressButton("5"))} />
      <Key text="6" func={() => dispatch(pressButton("6"))} />
      <Key text="+" func={() => dispatch(pressPlus())} />
      <Key text="1" func={() => dispatch(pressButton("1"))} />
      <Key text="2" func={() => dispatch(pressButton("2"))} />
      <Key text="3" func={() => dispatch(pressButton("3"))} />
      <Key text="-" func={() => dispatch(pressMinus())} />
      <Key text="." func={() => dispatch(pressDot())} />
      <Key text="0" func={() => dispatch(pressButton("0"))} />
      <Key text="/" func={() => dispatch(pressDivide())} />
      <Key text="x" func={() => dispatch(pressX())} />
      <Key
        text="RESET"
        type="secondary"
        large={true}
        func={() => dispatch(pressReset())}
      />
      <Key
        text="="
        type="red"
        large={true}
        func={() => dispatch(pressEqual())}
      />
    </div>
  );
}
