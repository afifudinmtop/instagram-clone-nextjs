import Search_list_component from "./Search_list_component";

const Search_list = () => {
  return (
    <div className="px-5 mt-[21px] overflow-auto h-dvh">
      <Search_list_component src="1.png" name="agus" />
      <Search_list_component src="2.png" name="retno" />
      <Search_list_component src="3.png" name="kiki" />
      <Search_list_component src="4.png" name="peter" />
      <Search_list_component src="5.png" name="alex" />
    </div>
  );
};

export default Search_list;
