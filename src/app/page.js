import Image from "next/image";
import Clients from "./components/clients";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Clients></Clients>
    </>
  );
}
