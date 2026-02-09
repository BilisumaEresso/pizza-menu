import Pizza from "./assets/components/Pizza";

function App() {
  // eslint-disable-next-line no-unused-vars
  const pizzas = [
    {
      name: "Neon Nexus",
      desc: "Glow-in-the-dark vegan pizza with activated charcoal crust and shimmering algae pesto",
      img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&auto=format&fit=crop",
      price: 24.99,
    },
    {
      name: "Cybernetic Supreme",
      desc: "AI-designed pizza with 3D-printed pepperoni spirals and quantum cheese blend",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop",
      price: 28.5,
    },
    {
      name: "Stellar Forge",
      desc: "Cosmic pizza with meteorite-dusted crust and star-shaped mozzarella constellations",
      img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=800&auto=format&fit=crop",
      price: 26.75,
    },
    {
      name: "Hologram Horizon",
      desc: "Augmented reality pizza with holographic cheese and temperature-responsive flavors",
      img: "https://images.unsplash.com/photo-1555072931-5b0c0c6d6948?w=800&auto=format&fit=crop",
      price: 32.0,
    },
    {
      name: "Quantum Quattro",
      desc: "Hot-and-cold pizza with traditional baking and liquid nitrogen flash-freezing",
      img: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=800&auto=format&fit=crop",
      price: 29.99,
    },
    {
      name: "Neo-Tokyo Fusion",
      desc: "Japanese-Italian fusion with wasabi crust and sashimi-grade tuna toppings",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop",
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
      </div>
      <Pizza pizzas={pizzas}/>
    </>
  );
}

export default App;
