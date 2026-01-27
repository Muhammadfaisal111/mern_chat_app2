import React from "react";

const Login = () => {
  const [LoginData, setLoginData] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-80 border p-6">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          name="username"
          className="input w-full"
          placeholder="Email"
          value={LoginData.username}
          onChange={handleChange}
        />

        <label className="label mt-2">Password</label>
        <input
          type="password"
          name="password"
          className="input w-full"
          placeholder="Password"
          value={LoginData.password}
          onChange={handleChange}
        />

        <button className="btn btn-neutral mt-4 w-full">Login</button>
      </fieldset>
    </div>
  );
};

export default Login;
