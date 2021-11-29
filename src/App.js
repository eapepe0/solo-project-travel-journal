import Header from "./components/Header.js";
import Card from "./components/Card.js";
import Footer from "./components/Footer.js";

import data from "./data.js";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="container">
      <Header />
      {cards}
      <Footer />
    </div>
  );
}
