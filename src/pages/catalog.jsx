import CatalogPage from "@/components/screens/catalog";
import { gql } from "@apollo/client";
import client from "@/graphql";
import { GetServerSideProps } from "next";
const Catalog = ({ data }) => {
  return <CatalogPage data={data}></CatalogPage>;
};
export default Catalog;
const FINDALL = gql`
  query findAll($input: FindMany!) {
    findAll(findmany: $input) {
      name
      id
      price
      street
      city
      description
      longitude
      latitude
    }
  }
`;
const FINDBYNAME = gql`
  query FindByName($name: String!) {
    findByName(name: $name) {
      id
      name
      description
      price
      city
      street
    }
  }
`;
export async function getServerSideProps({ query }) {
  if (query.name) {
    const find = await client.query({
      query: FINDBYNAME,
      variables: {
        name: query.name,
      },
    });
    return {
      props: {
        data: find.data.findByName,
      },
    };
  }
  const find = await client.query({
    query: FINDALL,
    variables: {
      input: {
        skip: 0,
        take: 12,
      },
    },
  });
  return {
    props: {
      data: find.data.findAll,
    },
  };
}
