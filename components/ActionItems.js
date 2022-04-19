import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

const ActionItems = () => {
  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
        router.push("/Login");
      }
    });
  }, []);

  return (
    <Container>
      <Header>
        <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
        <Profile>
          <Name>{user && user.name}</Name>
          <UserImage
            title="Logout"
            onClick={() => signOut(auth)}
            src={user && user.photoURL}
          />
        </Profile>
      </Header>

      <ActionButtonGroup>
        <Link href="/Search">
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            <Title>Ride</Title>
          </ActionButton>
        </Link>

        <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
          <Title>Wheels</Title>
        </ActionButton>
        <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
          <Title>Reserve</Title>
        </ActionButton>
      </ActionButtonGroup>

      <ActionInputButton>Where to?</ActionInputButton>
    </Container>
  );
};

export default ActionItems;

export const Container = tw.div`
  flex-1
  flex-col
  h-screen
  bg-gray-100
    
`;

export const Header = tw.div`
    flex
    justify-between
    bg-slate-600
    mt-1 mb-5
`;
export const UberLogo = tw.img`
    h-20
    pt-1
    ml-1
    rounded-lg
`;

const Profile = tw.div`
    m-4
    flex
    mt-5
    items-center
    text-white
`;
const Name = tw.div`
    mr-2
    w-20
`;

const UserImage = tw.img`
    h-12 w-12
    rounded-full
    object-cover
    border border-gray-100
    p-px
    cursor-pointer

`;

const ActionButtonGroup = tw.div`
    md:flex
    max-w-7xl mx-auto px-2 sm:px-6 lg:px-8
    cursor-pointer
    
`;
const ActionButton = tw.div`
    m-2
    bg-gray-200 
    flex
    flex-1
    flex-col
    mr-4 ml-4
    h-20
    rounded-lg
    justify-center
    items-center
    transform hover:scale-105
    transition delay-150 duration-300 ease-in-out
    hover:bg-slate-200
    border hover:border-slate-500
    bg-slate-100 shadow-lg shadow-slate-500/50 hover:shadow-slate-500/75
`;
const ActionButtonImage = tw.img`
    h-3/4
    transform
    transition delay-150 duration-300 ease-in-out
    hover:scale-125
`;

const Title = tw.div`
    text-xl
    pb-2
`;
const ActionInputButton = tw.div`
     bg-gray-200 
     h-20
     text-2xl
     rounded-lg
     flex
     items-center
     justify-center
     transform
     transition delay-150 duration-300 ease-in-out
     translate-y-4 
     hover:translate-y-5
     scale-75 
     cursor-pointer
     hover:bg-slate-200
     border hover:border-slate-500
     bg-slate-100 shadow-lg shadow-slate-500/50 hover:shadow-slate-500/75
`;
