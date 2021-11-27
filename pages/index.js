import Head from "next/head";

export default function Home() {
  return (
    <div className="flex justify-between items-center px-12 py-7">
      <a href="#" className="font-black text-3xl">
        Johar
      </a>
      <div>
      <a href="#" className="font-medium px-8">
          About
        </a>
        <a href="#" className="font-medium px-8">
          Portfolio
        </a>
        <a href="#" className="font-medium px-8">
          Blog
        </a>
      </div>
      <div>
        <a href="#" className="font-medium px-8">
          Login
        </a>
        <button className="px-6 py-2 rounded-full font-medium text-white  ml-2 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-opacity-50">
          Sign up
        </button>
      </div>
    </div>
  );
}
