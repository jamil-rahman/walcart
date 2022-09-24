import DropDownMenuItem from "../Drop Down Menu Item/DropDownMenuItem";
import laptop from "../../public/assets/laptop_grey.png";
import tv from "../../public/assets/tv_grey.png";
import sofa from "../../public/assets/sofa.png";
import phone from "../../public/assets/Phone_grey.png";
import misc from "../../public/assets/misc.png";
import food from "../../public/assets/fast_food.png";
import home from "../../public/assets/home.png";

function DropDownMenu() {
  return (
    <>
      <DropDownMenuItem alt="laptop" title="Laptop and Desktop" img={laptop} />
      <DropDownMenuItem alt="tv" title="Book and Stationary" img={tv} />
      <DropDownMenuItem alt="sofa" title="Home Living" img={sofa} />
      <DropDownMenuItem alt="phone" title="Electronic Appliances" img={phone} />
      <DropDownMenuItem alt="food" title="Fast Food and Snacks" img={food} />
      <DropDownMenuItem alt="home" title="Home Appliances" img={home} />
      <DropDownMenuItem alt="misc" title="More Categories" img={misc} />
    </>
  );
}

export default DropDownMenu;
