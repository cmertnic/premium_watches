import style from './Main.module.scss'
import Welcome from "@/app/main/Welcome/page";
import About_us from "@/app/main/About_us/page";
import Catalog from "@/app/main/Catalog/page";
import Green_And_Bronze from "@/app/main/Green_And_Bronze/page";
import Sale from "@/app/main/Sale/page";
const Main = () => {
  return (
    <div className={style.main}>
      <div className={style.main_row}>   
      <Welcome/>
      <About_us/>
      <Catalog/>
      <Green_And_Bronze/>
      <Sale/>
      </div>
    </div>
  );
};

export default Main;