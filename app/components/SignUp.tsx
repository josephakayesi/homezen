import LogoHeader from "./LogoHeader";
import SignUpForm from "./SignUpForm";

function SignUp() {
  return (
    <div className="flex flex-col w-2/4 px-8 md:px-12 lg:px-36 xl:px-42 h-[90%] my-24 self-end">
      <LogoHeader />
      <SignUpForm />
    </div>
  );
}

export default SignUp;
