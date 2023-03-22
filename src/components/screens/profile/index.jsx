import BackTitle from "@/components/backTitle";
import { ModalInput } from "@/components/ui kit/input";
import { PrimaryButton } from "@/components/ui kit/buttons";
const ProfilePage = () => {
  return (
    <div className="container">
      <BackTitle>Профиль</BackTitle>
      <div className="bg-white px-[52px] pt-[71px] flex gap-[267px] rounded-[40px]">
        <ul className="flex flex-col gap-12">
          <li>Личные данные</li>
          <li>Избранное</li>
          <li>Заявки</li>
          <li>Выйти из профиля</li>
        </ul>
        <div className="flex flex-col gap-12">
          <div className="flex gap-6">
            <div className="w-[335px] flex flex-col gap-3">
              <label>ФИО</label>
              <ModalInput placeholder="ФИО"></ModalInput>
            </div>
            <div className="w-[335px] flex flex-col gap-3">
              <label>Телефон</label>
              <ModalInput placeholder="+7 (900) 000-00-00"></ModalInput>
            </div>
          </div>
          <div className="w-[335px] flex flex-col gap-3">
            <label>Почта</label>
            <ModalInput type="email" placeholder="Почта"></ModalInput>
          </div>
          <div className="flex gap-6">
            <div className="w-[335px] flex flex-col gap-3">
              <label>Измените пароль</label>
              <ModalInput
                type="password"
                placeholder="Измените пароль"
              ></ModalInput>
            </div>

            <div className="w-[335px] flex flex-col gap-3">
              <label>Введите ещё раз</label>
              <ModalInput
                type="password"
                placeholder="Введите еще раз"
              ></ModalInput>
            </div>
          </div>
          <div className="pb-[147px]">
            <PrimaryButton>Сохранить изменения</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
