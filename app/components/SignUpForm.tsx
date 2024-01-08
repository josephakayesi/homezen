import Divider from "./Divider";
import SignUpWithGoogleButton from "./SignUpWithGoogleButton";

function SignUpForm() {
  return (
    <div className="w-full pt-16">
      <form className="pt-6">
        <div className="pb-6">
          <h1 className="font-bold text-2xl">Create your account</h1>
          <p className="text-gray-400 text-base">
            {"Let's help you get your perfect house"}
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="appearance-none border-gray-200 border rounded-md w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="appearance-none border-gray-200 border rounded-md w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <input
            className="appearance-none border-gray-200 border rounded-md w-full text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
          {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-primary w-full rounded-full text-white font-semibold px-2 py-3 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign up
          </button>
        </div>
      </form>
      <Divider />
      <SignUpWithGoogleButton />
      <div className="flex justify-center pt-3">
        Already have an account?
        <span>
          <a className="text-primary px-1 text-sm font-semibold" href="#">
            Log in
          </a>
        </span>
      </div>
    </div>
  );
}
export default SignUpForm;
