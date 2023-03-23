import Card from "@/components/card";
import Lensi from "@/components/ui kit/svg/recom";
import { PrimaryButton } from "@/components/ui kit/buttons";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
const FINDTHREE = gql`
  {
    findThree {
      id
      name
      description
      price
      city
      street
    }
  }
`;
const Recommend = () => {
  const { data, loading, error } = useQuery(FINDTHREE);
  const router = useRouter();
  if (data)
    return (
      <div className="mt-[50px]">
        <div className="container">
          <div className="flex px-14 justify-between items-center mb-9">
            <Lensi />
            <PrimaryButton
              onClick={() => {
                router.push("/catalog");
              }}
              width="219px"
              height="59px"
            >
              Посмотреть
            </PrimaryButton>
          </div>
          <div className="flex gap-4 justify-center">
            {data
              ? data.findThree.map((dat) => (
                  <Card
                    name={dat.name}
                    desc={dat.description}
                    price={dat.price}
                    city={dat.city}
                    street={dat.street}
                    id={dat.id}
                  ></Card>
                ))
              : ""}
          </div>
        </div>
      </div>
    );
  return <></>;
};

export default Recommend;
