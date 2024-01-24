const Search_list_component = (props) => {
  return (
    <div className="flex mb-[22px]">
      <img
        src={"/uploads/" + props.src}
        className="w-[40px] h-[40px] rounded-full me-[14px]"
      />
      <div className="text-[17px] my-auto">{props.name}</div>
    </div>
  );
};

export default Search_list_component;
