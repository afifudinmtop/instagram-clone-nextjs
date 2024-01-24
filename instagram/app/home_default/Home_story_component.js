const Home_story_component = (props) => {
  return (
    <div className="bg-[url('/gradient.png')] w-[73px] h-[73px] bg-contain bg-center bg-no-repeat	flex">
      <img
        src={"/uploads/" + props.src}
        className="w-[63px] h-[63px] my-auto mx-auto"
      />
    </div>
  );
};

export default Home_story_component;
