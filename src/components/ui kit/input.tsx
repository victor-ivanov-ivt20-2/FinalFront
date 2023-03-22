import { FC, ReactNode } from "react";
import Calendar from "./svg/Calendar";
import SearchInputLogo from "./svg/SearchInputLogo";
import Users from "./svg/Users";
export const SearchInput: FC = () => {
  return (
    <div className="flex border-[#E2E8F0] border-[1px] bg-white px-6 py-5 gap-2 rounded-xl">
      <SearchInputLogo />
      <input
        type="text"
        placeholder="Место, куда хотите поехать"
        className="w-full outline-none placeholder:text-[15px] placeholder:font-medium placeholder:text-slate-400"
      />
    </div>
  );
};

export const CalendarInput: FC = () => {
  return (
    <div>
      <div
        className={
          "flex border-[#E2E8F0] w-[274px] border-[1px] bg-white px-6 py-5 gap-2 rounded-xl"
        }
      >
        <div className="w-[24px]">
          <Calendar />
        </div>
        <input
          className="outline-none text-[15px] font-medium text-slate-400"
          type="date"
        />
        -
        <input
          className="outline-none text-[15px] font-medium text-slate-400"
          type="date"
        />
      </div>
    </div>
  );
};

export const UsersInput: FC = () => {
  return (
    <div
      className={
        "flex border-[#E2E8F0] border-[1px] w-[174px] bg-white px-6 py-5 gap-2 rounded-xl"
      }
    >
      <Users />
      <input
        type="text"
        placeholder="2 взр + 1 реб"
        className="w-full outline-none placeholder:text-[15px] placeholder:font-medium placeholder:text-slate-400 placeholder:underline"
      />
    </div>
  );
};
interface CheckboxProps {
  children: ReactNode;
  color: string;
}
export const Checkbox: FC<CheckboxProps> = ({ children, color = "white" }) => {
  const style = {
    color: color,
  };
  return (
    <div className="flex gap-2 items-center pt-2 pb-2 pl-2">
      <input className="w-[16px] h-[16px]" type="checkbox" />
      <label style={style} className="text-xs leading-4 font-medium">
        {children}
      </label>
    </div>
  );
};
interface ModalInputProps {
  placeholder: string;
  onChange: () => void;
  value: string | number | undefined;
  type: string;
}
export const ModalInput: FC<ModalInputProps> = ({
  value,
  placeholder,
  onChange,
  type = "text",
}) => {
  return (
    <input
      className="w-full border-[2px] border-slate-200 rounded-2xl bg-white px-6 py-[22px] placeholder:text-slate-400 outline-none leading-5 font-medium text-[15px]"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
