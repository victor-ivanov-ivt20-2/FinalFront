import { FC, ReactNode } from "react";
import Calendar from "./svg/Calendar";
import SearchInputLogo from "./svg/SearchInputLogo";
import Users from "./svg/Users";
export const SearchInput: FC = () => {
  return (
    <div className="flex bg-white px-6 py-5 gap-2 rounded-xl">
      <SearchInputLogo />
      <input
        type="text"
        placeholder="Место, куда хотите поехать"
        className="w-full outline-none placeholder:text-[15px] placeholder:font-medium placeholder:text-slate-400 placeholder:underline"
      />
    </div>
  );
};

export const CalendarInput: FC = () => {
  return (
    <div>
      <div className={"flex bg-white px-6 py-5 gap-2 rounded-xl"}>
        <Calendar />
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
    <div className={"flex bg-white px-6 py-5 gap-2 rounded-xl"}>
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
}
export const Checkbox: FC<CheckboxProps> = ({ children }) => {
  return (
    <div className="flex gap-2 items-center pt-2 pb-2 pl-2">
      <input className="w-[16px] h-[16px]" type="checkbox" />
      <label className="text-xs leading-4 font-medium text-white">
        {children}
      </label>
    </div>
  );
};
