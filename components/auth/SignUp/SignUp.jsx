import React from "react";

const SignUp = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <div
        className="w-[900px] flex bg-white h-[500px] rounded-2xl overflow-hidden"
        style={{
          boxShadow: "0 0 20px 0px #02020220",
        }}
      >
        {/* Left Section – Image or Illustration */}
        <div className="w-1/2 bg-gradient-to-br rounded-r-[700px] from-emerald-500 to-teal-400 flex items-center justify-center">
          <img
            src="/auth-illustration.svg"
            alt="signup illustration"
            className="w-[80%] h-auto"
          />
        </div>

        {/* Right Section – Form */}
        <div className="w-1/2 flex flex-col justify-center px-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Create Account
          </h1>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button
              type="submit"
              className="bg-emerald-500 text-white font-semibold py-2 rounded-md hover:bg-emerald-600 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-emerald-600 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
