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
  const [long, setLong] = useState();
  const [lati, setLati] = useState();
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
          longitude: long,
          latitude: lati,
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
        {data.findAll.map((dat) => (
          <div key={dat.name}>{dat.name}</div>
        ))}
        <form onSubmit={addPlace}>
          <label>Название</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <label>Описание</label>
          <input type="text" onChange={(e) => setDesc(e.target.value)} />
          <label>Долгота</label>
          <input type="text" onChange={(e) => setLong(e.target.value)} />
          <label>Широта</label>
          <input type="text" onChange={(e) => setLati(e.target.value)} />
          <input type="submit" />
        </form>
      </div>
    );
  return <div></div>;
}
