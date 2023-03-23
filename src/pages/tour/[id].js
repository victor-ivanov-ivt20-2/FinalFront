import { gql, useQuery } from "@apollo/client";
import client from "../../graphql/index";
import image from "@/components/ui kit/images/image.png";
import Image from "next/image";
import BackTitle from "@/components/backTitle";
import YandexMap from "../../components/map/YandexMap";
import { useEffect } from "react";
import Gilroy from "next/font/local";
import { PrimaryButton } from "../../components/ui kit/buttons";
const gilroyBold = Gilroy({
  src: "../../fonts/Gilroy-Bold.woff",
});
const gilroyMedium = Gilroy({
  src: "../../fonts/Gilroy-Medium.woff",
});
const FINDALL = gql`
  query findAll($input: FindMany!) {
    findAll(findmany: $input) {
      id
      name
      price
      street
      city
      description
      longitude
      latitude
    }
  }
`;

const TourPage = ({ tour }) => {
  useEffect(() => {
    console.log(tour);
  }, []);
  return (
    <div className="container">
      <BackTitle>{tour.name}</BackTitle>
      <div className="px-[52px] py-10 bg-white rounded-[40px]">
        <Image
          className="h-[467px] object-cover rounded-[40px]"
          width={1296}
          height={467}
          src={image}
          alt="картиночка"
        />
        <div className="mt-5 mb-10">
          <PrimaryButton height="56px">Забронировать</PrimaryButton>
        </div>
        <div className="mb-10">
          <h3
            style={gilroyBold.style}
            className="text-slate-900 text-[40px] leading-[48px] mb-5"
          >
            О базе
          </h3>
          <p className="font-medium text-[24px] text-slate-900">
            {tour.description}
          </p>
        </div>
        <div>
          <h3
            style={gilroyBold.style}
            className="text-slate-900 text-[40px] leading-[48px] mb-5"
          >
            Карта
          </h3>
          <YandexMap pointA={tour.longitude} pointL={tour.latitude}></YandexMap>
        </div>
      </div>
    </div>
  );
};

export default TourPage;

export async function getStaticPaths() {
  const { loading, error, data } = await client.query({
    query: FINDALL,
    variables: {
      input: {
        skip: 0,
        take: 100,
      },
    },
  });
  const paths = data.findAll.map((tour) => ({
    params: {
      id: tour.id.toString(),
    },
  }));
  return {
    paths: paths || [],
    fallback: false,
  };
}
const FINDONE = gql`
  query FindOne($id: Int!) {
    place(id: $id) {
      id
      name
      price
      street
      city
      description
      longitude
      latitude
    }
  }
`;
export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: FINDONE,
    variables: {
      id: Number(params.id),
    },
  });
  console.log(data);
  return {
    props: {
      tour: data.place,
    },
  };
}
