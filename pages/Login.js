import React, { useEffect } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);

  return (
    <LoginContainer>
      <Header>
        <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
      </Header>
      <Title>Log in to accesss your account</Title>
      <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInWithGoogle onClick={() => signInWithPopup(auth, provider)}>
        Sign In With Google
      </SignInWithGoogle>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = tw.div`
    flex flex-col h-screen p-4
    

`;

const SignInWithGoogle = tw.button`
    md:w-2/3 lg:w-2/4 w-screen bg-slate-900 
    hover:bg-blue-500
    text-2xl
    text-white p-4 mt-10 self-center w-full rounded-2xl hover:text-black
`;

const Header = tw.div`

`;
const UberLogo = tw.img`
    h-24 w-auto rounded-2xl object-contain
   
`;

const Title = tw.h1`
    text-5xl pt-4 text-gray-500
    self-center w-full
    p-4 m-5
`;

const HeadImage = tw.img`
    md:w-1/2 object-contain self-center
`;
