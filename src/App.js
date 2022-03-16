import React from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Card from "./components/Cards";
import data from "./data";

export default function App() {
  const cardElements = data.map((x) => <Card key={x.id} title={x.title} />);

  return (
    <>
      <Header />
      {cardElements}
    </>
  );
}
