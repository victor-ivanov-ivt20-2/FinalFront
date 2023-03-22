import { useAppDispatch, useAppSelector } from "@/hooks";
import { setActive } from "@/store/modal.slice";
import Login from "./login";
import Register from "./register";
const Modal = () => {
  const dispatch = useAppDispatch();
  const modal = useAppSelector((state) => state.modal.active);
  const type = useAppSelector((state) => state.modal.type);
  return (
    <div
      style={modal ? { display: "flex" } : { display: "none" }}
      className="modal"
      onClick={() => void dispatch(setActive(false))}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {type === "login" ? <Login></Login> : ""}
        {type === "register" ? <Register></Register> : ""}
      </div>
    </div>
  );
};
export default Modal;
