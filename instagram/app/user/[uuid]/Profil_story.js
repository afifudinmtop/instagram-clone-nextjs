import Profil_story_item from "./Profil_story_item";

const Profil_story = () => {
  return (
    <div className="flex justify-center gap-[14px] mt-[17px]">
      <Profil_story_item src="8.png" name="Goggles" />
      <Profil_story_item src="9.png" name="Graffiti" />
      <Profil_story_item src="10.png" name="Clock" />
      <Profil_story_item src="11.png" name="Foods" />
      <Profil_story_item src="12.png" name="Paints" />
    </div>
  );
};

export default Profil_story;
