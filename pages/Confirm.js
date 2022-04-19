import React from "react";
import { Container } from "../components/ActionItems";
import Map from "../components/Map";
import tw from "tailwind-styled-components/dist/tailwind";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RideSelector from "../components/RideSelector";
import { BackButton, ButtonContainer } from "./Search";
import Link from "next/link";
import Image from "next/image";
import image from "../assets/images/icons8-back-arrow-64.png";

const Confirm = () => {
  const [pickUpCoordinates, setPickUpCoordinates] = useState([0, 0]);
  const [dropOffCoordinates, setDropOffCoordinates] = useState([0, 0]);

  const router = useRouter();

  const { pickup, dropOff } = router.query;

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYWxsYW5yZXkiLCJhIjoiY2wxenh1amswMHI2eDNjcWRycGs5MDF1bCJ9.bBmnKcojP1tfuC9C-KITVw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickUpCoordinates(data.features[0].center);
      })
      .catch((error) => console.log(error));
  };

  const getDropOffCoordinates = (dropOff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYWxsYW5yZXkiLCJhIjoiY2wxenh1amswMHI2eDNjcWRycGs5MDF1bCJ9.bBmnKcojP1tfuC9C-KITVw",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropOffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropOffCoordinates(dropOff);
  }, [pickup, dropOff]);

  return (
    <ConfirmContainer>
      <ButtonContainer>
        <Link href='/Search'>
         <BackButton>
          <Image src={image} width={20} height={20} />
        </BackButton>
        </Link>
       
      </ButtonContainer>
      <Map
        pickUpCoordinates={pickUpCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickUpCoordinates={pickUpCoordinates}
          dropOffCoordinates={dropOffCoordinates}
        />
        <RideSelectorButton>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </RideSelectorButton>
      </RideContainer>
      <></>
    </ConfirmContainer>
  );
};

export default Confirm;

const ConfirmContainer = tw.div`
    flex
    flex-col
    h-screen
    bg-gray-100
`;
const RideContainer = tw.div`
  flex flex-1 flex-col h-1/2
`;

const RideSelectorButton = tw.div`
  flex justify-center items-center
  bg-slate-200 my-3
  drop-shadow-lg 
`;

const ConfirmButton = tw.div`
    text-white
    text-2xl 
    flex
    h-15
    mb-5
    justify-center
    align-center
    items-center
    rounded
    lg:w-2/3 w-screen
    bg-slate-600 p-2 mt-4 cursor-pointer
    transform 
    transition ease-in-out delay-50 hover:bg-slate-900 duration-300
`;
