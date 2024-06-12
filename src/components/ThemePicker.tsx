export default function ThemePicker() {
  return (
    <div className=" grid grid-cols-[2fr_3fr] gap-5 items-center">
      <div className=" text-text-text text-xs font-semibold  tracking-wider">
        THEME
      </div>
      <div className=" relative">
        <div className=" absolute -top-full flex justify-between w-full text-text-text font-semibold text-sm px-1">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className=" rounded-full bg-background-keypad h-5 p-1">
          <div className=" h-full aspect-square bg-equal-key rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
