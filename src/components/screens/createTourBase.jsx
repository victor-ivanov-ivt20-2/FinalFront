import BackTitle from "../backTitle";
import { ModalInput, Textarea } from "../ui kit/input";
import { PrimaryButton } from "../ui kit/buttons";
import { useQuery, gql, use, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CREATEPLACE = gql`
  mutation CreatePlace($input: CreatePlaceInput!) {
    createPlace(createPlaceInput: $input) {
      name
    }
  }
`;
const CreateTourBasePage = () => {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [house, setHouse] = useState();
  const [price, setPrice] = useState();
  const router = useRouter();
  const [mutatePlace, { dataa, loadinga, errora }] = useMutation(CREATEPLACE);

  const addPlace = async (e) => {
    e.preventDefault();
    await mutatePlace({
      variables: {
        input: {
          name: name,
          description: desc,
          region: "",
          city: city,
          street: street,
          house: house,
          price: Number(price),
        },
      },
    }).then((response) => router.reload());
  };
  return (
    <div className="container">
      <BackTitle>Добавление нового объекта размещения</BackTitle>
      <div>
        <div className="flex py-12 bg-white rounded-[40px] justify-center">
          <form
            onSubmit={addPlace}
            className="w-[390px] flex flex-col gap-8 justify-center items-center"
          >
            <ModalInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Название"
            />
            <Textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Описание"
            />
            <ModalInput
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Город"
            />
            <ModalInput
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Улица"
            />
            <ModalInput
              value={house}
              onChange={(e) => setHouse(e.target.value)}
              placeholder="Дом"
            />
            <ModalInput
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Цена"
            />
            <PrimaryButton height="64px" width="100%" rounded="20px">
              Создать
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTourBasePage;
