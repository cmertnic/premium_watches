import style from './Block.module.scss'
import Image from "next/image";
import clock from "@/public_img/Green_And_Bronze/black_clock.png"
import hand from "@/public_img/Green_And_Bronze/hand.png"
import clock_meed from "@/public_img/Green_And_Bronze/black_clock_meed.png"
import hand_meed from "@/public_img/Green_And_Bronze/hand_meed.png"
const Green_And_Bronze = () => {

  return (
    <div id='green_and_bronze' className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.Block_text_div}>
          <p>New watches</p>
          <h2>Green And Bronze—The Match Made In Heaven</h2>
        </div>
        <div className={style.Block_imgs}>
          <Image src={hand} className={style.Block_image} alt={'hand'} />
          <Image src={clock} className={style.Block_image} alt={'clock'} />
        </div>
        <div className={style.Block_imgs_medium}>
          <Image src={hand_meed} className={style.Block_image} alt={'hand'} />
          <Image src={clock_meed} className={style.Block_image} alt={'clock'} />
        </div>
      </div>
    </div>


  );
};

export default Green_And_Bronze;