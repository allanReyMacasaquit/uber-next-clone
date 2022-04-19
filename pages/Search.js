import React, { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { Container } from "../components/ActionItems";
import Image from "next/image";
import image from "../assets/images/icons8-back-arrow-64.png";
import Link from "next/link";

const Search = () => {
  const [pickup, setPickup] = useState("");
  const [dropOff, setDropOff] = useState("");
  return (
    <Container>
      <ButtonContainer>
        <Link href="/">
          <BackButton>
            <Image src={image} width={20} height={20} />
          </BackButton>
        </Link>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              required
              style={{
                outlineStyle: "none",
                width: "100%",
                paddingLeft: "20px",
              }}
              placeholder="Pickup Location"
            ></input>
          </Input>
          <Input>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="text"
              value={dropOff}
              onChange={(e) => setDropOff(e.target.value)}
              required
              style={{
                outlineStyle: "none",
                width: "100%",
                paddingLeft: "20px",
              }}
              placeholder="Where to?"
            ></input>
          </Input>
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        <p style={{ marginLeft: "10px" }}>Saved Places</p>
      </SavedPlaces>
      <Link
        href={{
          pathname: "/Confirm",
          query: {
            pickup: pickup,
            dropOff: dropOff,
          },
        }}
      >
        <ConfirmLocation>
          <ConfirmText>
            <h1
              style={{
                color: "white",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Confirm Location
            </h1>
          </ConfirmText>
        </ConfirmLocation>
      </Link>
    </Container>
  );
};

export default Search;

export const ButtonContainer = tw.div`
    bg-gray-200
    h-20
    py-6 px-5
    align-center
    cursor-pointer
`;

export const BackButton = tw.div`
    bg-gray-300
    p-1
    w-7 h-7 rounded-full
    border hover:border-gray-500
`;

const InputContainer = tw.div`
    flex
    justify-between
    items-center
    px-4 mb-5
    mt-10 
`;

const SavedPlaces = tw.div`
    flex items-center px-1 bg-indigo-100 h-10
`;

const ConfirmLocation = tw.div`
  flex justify-center items-center
`;

const ConfirmText = tw.div`
    rounded
    lg:w-2/3 w-screen
    bg-slate-600 p-2 mt-4 cursor-pointer
    transform 
    transition ease-in-out delay-50 hover:bg-slate-900 duration-300
`;

const FromToIcons = tw.div`
    m-2
    w-4
    flex
    flex-col
    justify-between
    align-center
    items-center
`;
const Circle = tw.img`
    h-3 w-3 
`;

const Line = tw.img`
    m-3

`;

const Square = tw.img`
    h-3 w-3
`;

const InputBoxes = tw.div`
   flex flex-col flex-1 
`;
const Input = tw.div`
    flex
    h-10
    my-2
    mr-2
    border 
    rounded py-2 px-2
`;

const PlusIcon = tw.img`
    w-7 bg-gray-300 rounded-full
    mr-2
    cursor-pointer
`;

const StarIcon = tw.img`
    w-8 bg-gray-500 rounded-full
    ml-5 
    cursor-pointer
`;
