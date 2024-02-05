const Comments_list = (props) => {
  const data = props.data;

  const timeAgo = (timestamp) => {
    const now = new Date();
    const past = new Date(timestamp);
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const elapsed = now - past;

    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + "s";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + "m";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + "h";
    } else if (elapsed < msPerDay * 7) {
      return Math.round(elapsed / msPerDay) + "d";
    } else {
      return (
        past.getDate() +
        " " +
        past.toLocaleString("default", { month: "long" }) +
        " " +
        past.getFullYear()
      );
    }
  };

  return (
    <div className="h-5/6 my-[10px] overflow-auto px-5">
      {data.map((item) => (
        <div key={item.uuid_comment} className="flex mb-[22px]">
          <img
            src={"/uploads/" + item.gambar}
            className="w-[40px] h-[40px] rounded-full me-[14px]"
          />
          <div className="my-auto">
            <div className="flex">
              <div className="font-bold">{item.username}</div>
              <div className="ps-2 text-[#737373]">{timeAgo(item.ts)}</div>
            </div>
            <div className="">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments_list;
