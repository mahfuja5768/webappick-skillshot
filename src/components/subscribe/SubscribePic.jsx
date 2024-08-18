import { getImgUrl } from "../../utils/getImagePath";

const SubscribePic = () => {
   return (
     <div className="-mt-40 relative flex justify-center items-center">
       <img
         className="absolute right-4 top-52"
         src={getImgUrl("dis-obj3.png")}
         alt="dis-obj2"
       />

       <img
         className=" absolute  left-5 bottom-10"
         src={getImgUrl("dis-obj2.png")}
         alt="dis-obj1"
       />
       <img
         className=" absolute  right-5 bottom-10"
         src={getImgUrl("dis-obj4.png")}
         alt="dis-obj4"
       />
       <img
         className="w-[408px] h-[541px]"
         src={getImgUrl("discountBoy.png")}
         alt="discountBoy"
       />
     </div>
   );
};

export default SubscribePic;