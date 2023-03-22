import { YMaps, Map, Placemark, Clusterer } from "@pbe/react-yandex-maps";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
const FINDALL = gql`
  query findAll($input: FindMany!) {
    findAll(findmany: $input) {
      name
      description
      longitude
      latitude
    }
  }
`;

export default function YandexMap() {
  const { data, loading, error } = useQuery(FINDALL, {
    variables: {
      input: {
        skip: 0,
        take: 10,
      },
    },
  });
  useEffect(() => {
    if (data)
      console.log(
        data.findAll.map((placemark) => {
          if (placemark) return placemark;
        })
      );
  }, [data]);
  if (data)
    return (
      <YMaps>
        <Map
          height={600}
          width={1290}
          defaultState={{ center: [62.03755, 129.71431], zoom: 15 }}
        >
          <Clusterer
            options={{
              preset: "islands#invertedVioletClusterIcons",
              groupByCoordinates: false,
            }}
          >
            {data.findAll.map((placemark) => {
              if (placemark.longitude) {
                return (
                  <Placemark
                    key={placemark.name}
                    geometry={[
                      parseFloat(placemark.longitude),
                      parseFloat(placemark.latitude),
                    ]}
                    properties={{
                      hintContent: `<b> ${placemark.description} </b>`,
                      iconCaption: placemark.name,
                    }}
                  />
                );
              }
            })}
          </Clusterer>
          {/* <Placemark
                onClick={() => {
                  console.log("hey");
                }}
                geometry={[62.03555, 129.71431]}
                properties={{
                  hintContent: `<b> Я появляюсь при наведении на метку </b>`,
                  iconCaption: "Это огромный медведь",
                }}
                options={{
                  preset: "island",
                }}
              /> */}
        </Map>
      </YMaps>
    );
  return <div></div>;
}
