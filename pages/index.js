import { useEffect } from "react";
import tw from "tailwind-styled-components";
import Map from "../components/Map";
import ActionItems from "../components/ActionItems";

export default function Home() {
  return (
    <Container>
      <Map />
      <ActionItems />
    </Container>
  );
}

const Container = tw.div`
  flex
  flex-col
  h-screen
  bg-gray-100
`;
