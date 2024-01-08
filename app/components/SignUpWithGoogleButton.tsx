import Image from "next/image";

function SignUpWithGoogleButton() {
  return (
    // <div className="flex items-center justify-center h-screen dark:bg-gray-800">
    //   Button should show
    //   <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
    //     <Image
    //       src={"/google-color.svg"}
    //       width={24}
    //       height={24}
    //       alt="google logo"
    //     />
    //     {/* <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"> */}
    //     <span>Sign up with Google</span>
    //   </button>
    // </div>
    <div className="flex items-center justify-center w-full bg-white dark:bg-gray-800">
      <button className="px-2 py-3 border flex gap-2 font-semibold w-full justify-center rounded-full border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
        <Image
          src={"/google-color.svg"}
          width={24}
          height={24}
          alt="google logo"
        />
        <span>Sign up with Google</span>
      </button>
    </div>
  );
}

export default SignUpWithGoogleButton;
