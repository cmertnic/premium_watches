import style from './About_us.module.scss'
import Image from "next/image";
import clock from "@/public_img/about_us/3d_clock.gif"
import clock_meed from "@/public_img/about_us/3d_clock_meed.gif"
import clock_small from "@/public_img/about_us/3d_clock_small.gif"
const About_us = () => {

  return (
    <div id='about' className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.Block_text}>
          <h2>About us</h2>

          <p className={style.p1}>Welcome to our premium watch collection, where luxury and style<br /> meet functionality and precision. Our selection
            of timepieces<br /> embodies the very best in Swiss craftsmanship and engineering,<br /> ensuring that you'll always have a reliable and stylish accessory on<br /> your wrist.</p>
          <p className={style.p2}>At our premium watch collection, we believe that a watch<br /> is more than just a timekeeping device –
            it's a statement piece that reflects your personality and style. So why settle for anything less than the best? Browse our
            collection today and discover the perfect watch for you.</p>

          <p className={style.p1_small}>Welcome to our premium watch collection, where luxury and style meet functionality and precision. Our selection
            of timepieces<br /> embodies the very best in Swiss craftsmanship and engineering, ensuring that you'll always have a reliable and stylish accessory on  your wrist.</p>
          <p className={style.p2_small}>At our premium watch collection, we believe that a watch is more than just a timekeeping device –
            it's a statement piece that reflects your personality and style. So why settle for anything less than the best? Browse our
            collection today and discover the perfect watch for you.</p>
        </div>
        <Image src={clock} className={style.Block_image} alt={'Block_image'} />
        <Image src={clock_meed} className={style.Block_image_meed} alt={'Block_image'} />
        <Image src={clock_small} width="335" className={style.Block_image_small} alt={'Block_image'} />
      </div>
    </div>


  );
};

export default About_us;