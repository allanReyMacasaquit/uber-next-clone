import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { carList } from "../assets/data/carList";

const RideSelector = ({ pickUpCoordinates, dropOffCoordinates }) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1IjoiYWxsYW5yZXkiLCJhIjoiY2wxenh1amswMHI2eDNjcWRycGs5MDF1bCJ9.bBmnKcojP1tfuC9C-KITVw`
    )
      .then((res) => res.json())
      .then((data) => {
        const duration = data.routes[0]?.duration / 60;
        setRideDuration(duration);
      });
  }, [pickUpCoordinates, dropOffCoordinates]);
  return (
    <RideContainer>
      <Title> Choose a file, or swipe up more more</Title>
      <CarList>
        {carList.map((car) => (
          <Car key={car.id}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <h1 style={{ fontWeight: "bolder" }}>{car.service} </h1>
              <p style={{ color: "blue" }}>{rideDuration.toFixed(2)} min.</p>
            </CarDetails>
            <CarPriceContainer>
              <CarPrice>{`$ ${(rideDuration * car.multiplier).toFixed(
                2
              )}`}</CarPrice>
            </CarPriceContainer>
          </Car>
        ))}
      </CarList>
    </RideContainer>
  );
};

export default RideSelector;

const RideContainer = tw.div`
  flex
  flex-col
  flex-1
  overflow-y-scroll
  drop-shadow-lg 
`;
const Title = tw.div`
  flex justify-center items-center
  bg-gray-200 drop-shadow-md
  cursor-pointer
  h-10
`;

const CarList = tw.div`
  bg-gray-300
  flex flex-col justify-center items-center
  overflow-y-scroll
  pt-20
  mt-1
  drop-shadow-lg 
`;
const Car = tw.div`
lg:w-2/3 md:w-3/4 w-screen
flex justify-center items-center 
px-10
h-20 
hover:bg-gray-200 hover:rounded-lg
cursor-pointer
`;

const CarImage = tw.img`
h-20 w-20 object-cover mr-1
cursor-pointer
`;
const CarDetails = tw.div`
text-lg flex flex-col items-start justify-center ml-2
`;
const CarPrice = tw.div`
`;

const CarPriceContainer = tw.div`
flex flex-1 justify-end align-center items-center m-2 
`;
