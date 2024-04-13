import style from './Block.module.scss'
import Card from '@/widgets/card/Card';
import Masive_clock_1 from '@/widgets/card/card_massive/massive_clock_1';
import Masive_clock_2 from '@/widgets/card/card_massive/massive_clock_2';
import Masive_clock_3 from '@/widgets/card/card_massive/massive_clock_3';
import Masive_clock_4 from '@/widgets/card/card_massive/massive_clock_4';
import Masive_clock_5 from '@/widgets/card/card_massive/massive_clock_5';
import Masive_clock_6 from '@/widgets/card/card_massive/massive_clock_6';
import Masive_clock_7 from '@/widgets/card/card_massive/massive_clock_7';
import Masive_clock_8 from '@/widgets/card/card_massive/massive_clock_8';
import Masive_clock_9 from '@/widgets/card/card_massive/massive_clock_9';
import Masive_clock_10 from '@/widgets/card/card_massive/massive_clock_10';
import Masive_clock_11 from '@/widgets/card/card_massive/massive_clock_11';
import Masive_clock_12 from '@/widgets/card/card_massive/massive_clock_12';
const Catalog = () => {

  return (
    <div id='catalog' className={style.Block}>
      <div className={style.Block_row}>
        <h2>Catalog</h2>
       <div className={style.cards}>
       {Masive_clock_1.map((card, i) => <Card title={card.title} text={card.text} img={card.img}  />)}
       {Masive_clock_2.map((card, i) => <Card title={card.title} text={card.text} img={card.img}  />)}
       {Masive_clock_3.map((card, i) => <Card title={card.title} text={card.text} img={card.img}  />)}
       {Masive_clock_4.map((card, i) => <Card title={card.title} text={card.text} img={card.img}  />)}
       {Masive_clock_5.map((card, i) => <Card title={card.title} text={card.text} img={card.img}  />)}
       {Masive_clock_6.map((card, i) => <Card title={card.title} text={card.text} img={card.img}  />)}
       {Masive_clock_7.map((card, i) => <Card title={card.title} text={card.text} img={card.img}  />)}
       {Masive_clock_8.map((card, i) => <Card title={card.title} text={card.text} img={card.img}  />)}
       {Masive_clock_9.map((card, i) => <Card title={card.title} text={card.text} img={card.img}  />)}
       {Masive_clock_10.map((card, i) => <Card title={card.title} text={card.text} img={card.img}  />)}
       {Masive_clock_11.map((card, i) => <Card title={card.title} text={card.text} img={card.img}  />)}
       {Masive_clock_12.map((card, i) => <Card title={card.title} text={card.text} img={card.img}  />)}
       </div>
<form action="">
<input type="submit"className={style.input}   value="Buy now"/>
</form>
      </div>
    </div>


  );
};

export default Catalog;