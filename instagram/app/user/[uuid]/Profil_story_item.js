const Profil_story_item = (props) => {
  return (
    <div>
      <div className="bg-[url('/ellipse.png')] w-[58px] h-[58px] bg-contain bg-center bg-no-repeat flex">
        <img
          src={"/uploads/" + props.src}
          className="w-[50px] h-[50px] my-auto mx-auto"
        />
      </div>

      <div className="text-center text-[12px] mt-[5px]">{props.name}</div>
    </div>
  );
};

export default Profil_story_item;
