import style from './Block.module.scss'
import Image from "next/image";
import big_clock from "@/public_img/Sale/Big_clock.png"
import small_clock1 from "@/public_img/Sale/small_clock_1.png"
import small_clock2 from "@/public_img/Sale/small_clock_2.png"
import small_clock3 from "@/public_img/Sale/small_clock_3.png"
import small_clock4 from "@/public_img/Sale/small_clock_4.png"
import big_clock_small from "@/public_img/Sale/Big_clock_small.png"
import small_clock1_small from "@/public_img/Sale/small_clock_1_small.png"
import small_clock2_small from "@/public_img/Sale/small_clock_2_small.png"
import small_clock3_small from "@/public_img/Sale/small_clock_3_small.png"
import small_clock4_small from "@/public_img/Sale/small_clock_4_small.png"
const Sale = () => {

  return (
    <div id='sale' className={style.Block}>
      <div className={style.Block_row}>
        <div className={style.Sale}>
          <h2>Sale</h2>
        </div>

        <div className={style.Block_imgs_text}>
          <div className={style.Block_imgs}>
            <div className={style.Block_small_imgs}>
              <Image src={small_clock1} alt={'small_clock1'} />
              <Image src={small_clock2} className={style.Block_small_image} alt={'small_clock2'} />
              <Image src={small_clock3} className={style.Block_small_image} alt={'small_clock3'} />
              <Image src={small_clock4} alt={'small_clock4'} />
            </div>
            <Image src={big_clock} alt={'big_clock'} />
          </div>
          <div className={style.Block_imgs_small}>
            <div className={style.Block_small_imgs}>
              <Image src={small_clock1_small} alt={'small_clock1'} />
              <Image src={small_clock2_small} className={style.Block_small_image} alt={'small_clock2'} />
              <Image src={small_clock3_small} className={style.Block_small_image} alt={'small_clock3'} />
              <Image src={small_clock4_small} alt={'small_clock4'} />
            </div>
            <Image src={big_clock_small} alt={'big_clock'} />
          </div>
          <div className={style.Block_text}>
            <div className={style.div1_Block_text}>
              <h3>Greenlane Watch By
                Police For MenHT </h3>
              <div className={style.tag_and_text}>
                <p>Product tag: PEWJK2227003</p>
                <div className={style.poddiv1_Block_text}>
                  <p>€700</p>
                  <p className={style.p2}>€1000</p>
                </div>

              </div>

            </div>
            <div className={style.div2_Block_text}>
              <div className={style.title_and_line}>
                <h3>Description</h3>
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H16" stroke="#141414" />
                </svg>
              </div>
              <p>Richly detailed with an understated design - the Police Men’s Greenlane watch features a versatile multifunction
                design that fits effortlessly into work and play. The steel case is adorned with a semi-transparent black dial.
                The timepiece exhibits a contrast through a black IP bracelet with matching crown and pushers.</p>
            </div>
            <div className={style.div3_Block_text}>
              <div className={style.title_and_line}>
                <h3>DETAILS & FEATUREStion</h3>
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1H16" stroke="#141414" />
                </svg>
              </div>
              <p>Gender: man<br />
                Size: 46x54.5mm<br />
                Case Colour: Steel<br />
                Band Material: Metal<br />
                Case Material: Metal<br />
                Features: Multifunction<br />
                Water Resistant: 5 (ATM)<br />
                Band Colour: Steel</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Sale;