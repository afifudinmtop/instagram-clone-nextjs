const Message_item = (props) => {
  return (
    <div className="flex justify-between ms-[20px] me-[15px] mb-[15px]">
      <div className="flex gap-[20px]">
        <img
          src={"/uploads/" + props.src}
          className="w-[55px] h-[55px] my-auto rounded-full"
        />
        <div className="text-sm my-auto">
          <div className="text-dark">{props.name}</div>
          <div className="text-[#7D7D7D]">{props.status}</div>
        </div>
      </div>

      <img src={"/camera.png"} className="w-[21px] h-[21px] my-auto" />
    </div>
  );
};

export default Message_item;
