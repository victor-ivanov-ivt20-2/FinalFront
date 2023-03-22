import { useQuery, gql, use, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const FINDALL = gql`
  query findAll($input: FindMany!) {
    findAll(findmany: $input) {
      name
      description
    }
  }
`;
const CREATEPLACE = gql`
  mutation CreatePlace($input: CreatePlaceInput!) {
    createPlace(createPlaceInput: $input) {
      name
    }
  }
`;

export default function Test() {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const [house, setHouse] = useState();
  const router = useRouter();
  const { data, loading, error } = useQuery(FINDALL, {
    variables: {
      input: {
        skip: 0,
        take: 10,
      },
    },
  });
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
        },
      },
    }).then((response) => router.reload());
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (data)
    return (
      <div>
        <form onSubmit={addPlace}>
          <label>Название</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <label>Описание</label>
          <input type="text" onChange={(e) => setDesc(e.target.value)} />
          <label>Город</label>
          <input type="text" onChange={(e) => setCity(e.target.value)} />
          <label>Улица</label>
          <input type="text" onChange={(e) => setStreet(e.target.value)} />
          <label>Дом</label>
          <input type="text" onChange={(e) => setHouse(e.target.value)} />
          <input type="submit" />
        </form>
      </div>
    );
  return <div></div>;
}
