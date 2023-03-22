import Card from "@/components/card";
import Lensi from "@/components/ui kit/svg/recom";
import { PrimaryButton } from "@/components/ui kit/buttons";
const Recommend = () => {
  return (
    <div className="mt-[50px]">
      <div className="container">
        <div className="flex px-14 justify-between items-center mb-9">
          <Lensi />
          <PrimaryButton width="219px" height="59px">
            Посмотреть
          </PrimaryButton>
        </div>
        <div className="flex gap-4 justify-center">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
