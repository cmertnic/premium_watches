import style from './Block.module.scss'
import Image from "next/image";
import watch_on_hand from "@/public_img/welcome/watch_on_hand.png"
import watch_on_hand_meed from "@/public_img/welcome/watch_on_hand_meed.png"
import watch_on_hand_small from "@/public_img/welcome/watch_on_hand_small.png"
import Swipper from "@/features/swipper/swipper"
import Swipper_small from "@/features/swipper_small/swipper"
const Welcome = () => {

  return (
    <div id='welcome' className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.welcome_text}>
          <h1>Welcome to our collection<br /> of premium watches</h1>
          <p>Our watches are not just timepieces, but <br /> also an expression of your personality and
            <br /> lifestyle. From classic designs to modern <br /> ones, we have a watch to suit every taste <br /> and occasion.</p>
        </div>

        <div className={style.slider_and_hand}>
          <Swipper />
          <Image src={watch_on_hand} alt="watch_on_hand" />
        </div>

        <div className={style.welcome_text_meed}>
          <h1>Welcome to our collection<br /> of premium watches</h1>
        </div>
        <div className={style.slider_and_hand_meed}>

          <Swipper />
          <p>Our watches are not just timepieces, but <br /> also an expression of your personality and
            <br /> lifestyle. From classic designs to modern <br /> ones, we have a watch to suit every taste <br /> and occasion.</p>
          <Image src={watch_on_hand_meed} alt="watch_on_hand" />
        </div>

        <div className={style.welcome_text_small}>
          <h1>Welcome to our collection of<br />  premium watches</h1>
        </div>

        <div className={style.slider_and_hand_small}>
          <Swipper_small />
          <p>Our watches are not just timepieces, but <br /> also an expression of your personality and
            <br /> lifestyle. From classic designs to modern <br /> ones, we have a watch to suit every taste <br /> and occasion.</p>
          <Image src={watch_on_hand_small} alt="watch_on_hand" />
        </div>

      </div>
    </div>


  );
};

export default Welcome;