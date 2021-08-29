import Button from "@material-tailwind/react/Button";
import Image from "next/Image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* <Image
        src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
        height="300"
        width="550"
        objectFit="contain"
      /> */}
      <Button
        className="w-44 mt-10"
        color="blue"
        buttonType="filled"
        ripple="light"
        onClick={signIn}
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
