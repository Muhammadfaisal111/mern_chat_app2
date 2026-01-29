import React from "react";

const SignUp = () => {
  const [SignUpData, setSignUpData] = React.useState({
    fullName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setSignUpData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-80 border p-6">
        <legend className="fieldset-legend">SignUp</legend>

        <label className="label">fullName</label>
        <input
          type="text"
          name="fullName"
          className="input w-full"
          placeholder="fullName"
          onChange={handleChange}
        />
        <label className="label">email</label>
        <input
          type="email"
          name="email"
          className="input w-full"
          placeholder="Email"
          onChange={handleChange}
        />

        <label className="label mt-2">Password</label>
        <input
          type="password"
          name="password"
          className="input w-full"
          placeholder="Password"
          onChange={handleChange}
        />
        <label className="label mt-2">Confirm Password</label>
        <input
          type="password"
          name="confirmpassword"
          className="input w-full"
          placeholder="confirm password"
          onChange={handleChange}
        />

        <button className="btn btn-neutral mt-4 w-full">Sign Up</button>
      </fieldset>
    </div>
  );
};
export default SignUp;
