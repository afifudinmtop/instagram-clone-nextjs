import DM_kiri from "./DM_kiri";
import DM_kanan from "./DM_kanan";

const DM_message = () => {
  return (
    <div className="h-dvh ms-[20px] me-[15px]">
      <div className="h-5/6 my-[10px] overflow-auto ">
        <DM_kiri
          text="Halo adadwadawdwadaw Halo adadwadawdwadaw Halo adadwadawdwadaw Halo
            adadwadawdwadaw Halo adadwadawdwadaw Halo adadwadawdwadaw Halo
            adadwadawdwadaw Halo adadwadawdwadaw Halo adadwadawdwadaw Halo
            adadwadawdwadaw"
          ts="25/03/2023, 14:26"
        />

        <DM_kanan
          text="Halo adadwadawdwadaw Halo adadwadawdwadaw Halo adadwadawdwadaw Halo
            adadwadawdwadaw Halo adadwadawdwadaw Halo adadwadawdwadaw Halo
            adadwadawdwadaw Halo adadwadawdwadaw Halo adadwadawdwadaw Halo
            adadwadawdwadaw"
          ts="25/03/2023, 14:26"
        />
      </div>
    </div>
  );
};

export default DM_message;
