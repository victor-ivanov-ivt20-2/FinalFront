import { FC } from "react";
import {
  PrimaryButtonProps,
  SecondaryButtonProps,
} from "./interfaces/button.interface";

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  onClick,
  height = "73px",
  width = "290px",
  disabled = false,
  rounded = "90px",
  children,
}) => {
  const style = {
    height: height,
    width: width,
    borderRadius: rounded,
  };
  return (
    <button
      className="bg-[#3B82F6] text-white flex justify-center font-medium items-center text-lg text-center 
      leading-[25px] hover:bg-[#257AF3] active:bg-[#0F55EA] disabled:bg-[#C9CACB] disabled:text-[#F0F1F2]"
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const SecondaryButton: FC<SecondaryButtonProps> = ({
  onClick,
  height = "48px",
  width = "340px",
  disabled = false,
  rounded = "90px",
  color = "#1C63EC",
  children,
}) => {
  const style = {
    height: height,
    width: width,
    borderRadius: rounded,
    color: color,
  };
  return (
    <button
      className="bg-[#3B82F6] bg-opacity-25 flex justify-center items-center text-[18px] font-medium text-center 
      leading-[20px] active:bg-[#E4E4E4] disabled:bg-[#C9CACB] disabled:text-[#F0F1F2]"
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
