import PlanetsList from "@/components/PlanetsList";
import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      page: context.query.page,
    },
  };
};

export default function Planets(props: { page: string }) {
  return <PlanetsList key={props.page} page={props.page} />;
}
