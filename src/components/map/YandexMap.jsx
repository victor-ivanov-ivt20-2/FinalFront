import { YMaps, Map, Placemark, Clusterer } from "@pbe/react-yandex-maps";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import Karta from "../ui kit/svg/karta";
import styles from "./map.module.css";
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
      <div className="container w-full  px-[52px] pb-[50px] bg-white rounded-[40px] flex justify-between flex-col pt-[28px]">
        <div className="mb-[98px]">
          <Karta></Karta>
        </div>
        <YMaps>
          <Map
            height={672}
            width={1296}
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
                        parseFloat(placemark.latitude),
                        parseFloat(placemark.longitude),
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
      </div>
    );
  return <div></div>;
}
