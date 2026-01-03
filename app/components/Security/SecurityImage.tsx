import Image from "next/image";
import Images from "@/public/images/man.png";

const SecurityImage = () => {
  return (
    <div className="w-full z-10 h-full relative rounded-3xl overflow-hidden">
      <Image
        src={Images}
        alt="security image"
        fill
        sizes=""
        className="object-cover"
      />
    </div>
  );
};

export default SecurityImage;
