"use client";
import createUser from "@/actions/user_actions";
import { redirect } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function SignupScreen() {
  const [error, setError] = useState("");
  const [form, setForm] = useState<{
    username: string;
    password: string;
    name: string | undefined;
    confirm: string;
  }>({ username: "", password: "", confirm: "", name: undefined });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };
  const handleAction = async () => {
    if (form.username == "") {
      setError("username cannot be empty");
      return;
    }
    if (form.password == "") {
      setError("password cannot be empty");
      return;
    }
    if (form.password != form.confirm) {
      setError("passwords do not match");
      return;
    }

    const newUser = await createUser({
      data: {
        username: form.username,
        name: form.name,
        password: form.password,
      },
    });
    if (newUser.error == "") {
      console.log("came here");
      redirect("/signin");
    } else {
      setError(newUser.error);
    }
  };
  return (
    <div className="m-auto flex flex-col items-center justify-center">
      <div className="h-8"></div>
      <form
        className="w-80 space-y-2 rounded-lg border border-black p-4 shadow-md"
        action={handleAction}
      >
        <div className="flex">
          <p>Username</p>
          <div className="flex-1"></div>
          <input
            name="username"
            value={form["username"]?.toString() || ""}
            className="rounded border border-black bg-gray-100 p-1"
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex">
          <p>Password</p>
          <div className="flex-1"></div>
          <input
            className="rounded border border-black bg-gray-100 p-1"
            type="password"
            name="password"
            value={form["password"] || ""}
            onChange={handleChange}
          ></input>
        </div>
        <div className="flex">
          <p>Confirm</p>
          <div className="flex-1"></div>
          <input
            className="rounded border border-black bg-gray-100 p-1"
            type="password"
            name="confirm"
            value={form["confirm"]}
            onChange={handleChange}
          ></input>
        </div>
        <p className="text-lg text-red-500">{error}</p>
        <button
          type="submit"
          className="rounded-lg bg-blue-600 p-1 px-2 text-white"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
