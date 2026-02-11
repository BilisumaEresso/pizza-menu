import Pizza from "./assets/components/Pizza";

function App() {
  // eslint-disable-next-line no-unused-vars
  const pizzas = [
    {
      name: "Neon Nexus",
      desc: "Glow-in-the-dark vegan pizza with activated charcoal crust and shimmering algae pesto",
      img: "pizza/pizza1.jpg",
      price: 24.99,
    },
    {
      name: "Cybernetic Supreme",
      desc: "AI-designed pizza with 3D-printed pepperoni spirals and quantum cheese blend",
      img: "pizza/pizza2.jpg",
      price: 28.5,
    },
    {
      name: "Stellar Forge",
      desc: "Cosmic pizza with meteorite-dusted crust and star-shaped mozzarella constellations",
      img: "pizza/pizza3.jpg",
      price: 26.75,
    },
    {
      name: "Hologram Horizon",
      desc: "Augmented reality pizza with holographic cheese and temperature-responsive flavors",
      img: "pizza/pizza4.jpg",
      price: 32.0,
    },
    {
      name: "Quantum Quattro",
      desc: "Hot-and-cold pizza with traditional baking and liquid nitrogen flash-freezing",
      img: "pizza/pizza5.jpg",
      price: 29.99,
    },
    {
      name: "Neo-Tokyo Fusion",
      desc: "Japanese-Italian fusion with wasabi crust and sashimi-grade tuna toppings",
      img: "pizza/pizza6.jpg",
      price: 31.25,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-8 justify-center items-center">
        <h1 className="text-yellow-500 text-center uppercase ">
          ~ fast react pizza co. ~
        </h1>
        <h1 className="text-center  border-y-2 w-fit">OUR MENU</h1>
        <p>
          Experience the future of pizza with our innovative, sci-fi inspired
          creations featuring unconventional ingredients and bold flavor
          combinations.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {pizzas.map((p, index) => (
            <Pizza key={index} p={p} />
          ))}
        </div>
        <button className="cursor-pointer bg-amber-300 p-4 rounded-2xl">
          Order Now!
        </button>
      </div>
    </>
  );
}

export default App;
