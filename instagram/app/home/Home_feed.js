import Home_feed_components from "./Home_feed_component";

const Home_feed = () => {
  return (
    <div>
      <Home_feed_components
        avatar="1.png"
        name="leo.messi"
        gambar="x1.png"
        caption="kajndjandkajndka kajndkaw ajndwaknd kajndjandkajndka kajndkaw ajndwaknd"
        komen="103"
        likes="99"
      />

      <Home_feed_components
        avatar="2.png"
        name="cuifenn"
        gambar="x2.png"
        caption="kajndjandkajndka kajndkaw ajndwaknd kajndjandkajndka kajndkaw ajndwaknd"
        komen="813"
        likes="55"
      />

      <Home_feed_components
        avatar="3.png"
        name="agusx"
        gambar="x3.png"
        caption="kajndjandkajndka kajndkaw ajndwaknd kajndjandkajndka kajndkaw ajndwaknd"
        komen="545"
        likes="21"
      />
    </div>
  );
};

export default Home_feed;
