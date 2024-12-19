export default function SignupScreen() {
  return (
    <div className="m-auto flex flex-col items-center justify-center">
      <div className="h-8"></div>
      <form className="w-80 space-y-2 rounded-lg border border-black p-4 shadow-md">
        <div className="flex">
          <p>Username</p>
          <div className="flex-1"></div>
          <input className="rounded border border-black bg-gray-100 p-1"></input>
        </div>
        <div className="flex">
          <p>Password</p>
          <div className="flex-1"></div>
          <input
            className="rounded border border-black bg-gray-100 p-1"
            type="password"
          ></input>
        </div>
        <div className="flex">
          <p>Confirm</p>
          <div className="flex-1"></div>
          <input
            className="rounded border border-black bg-gray-100 p-1"
            type="password"
          ></input>
        </div>
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
