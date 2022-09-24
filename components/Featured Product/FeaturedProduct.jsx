import Image from "next/image";
import image2 from "../../public/assets/image2.png";
import image3 from "../../public/assets/image3.png";

function FeaturedProduct() {
  return (
    <div style={{ width: "100%", height: "60%" }}>
      <Image
        src={image2}
        alt="product 2"
        responsive
        height={380}
        width={600}
        style={{ cursor: "pointer" }}
      />
      <Image
        src={image3}
        alt="product_3"
        responsive
        height={380}
        width={600}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default FeaturedProduct;
