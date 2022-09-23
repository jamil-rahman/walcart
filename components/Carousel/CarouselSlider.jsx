import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import image_1 from "../../public/assets/image1.png"
import image_2 from "../../public/assets/image2.png"
import image_3 from "../../public/assets/image3.png"
export default function CarouselSlider() {
  return (
    <div style={{paddingLeft: "10%"}}>
     <Carousel fade>
      <Carousel.Item>
        <Image src={image_1} alt="image"/>
        <Carousel.Caption>
          <p className='text-danger'>1st pic</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={image_1} alt="image"/>

        <Carousel.Caption>
          <p className='text-danger'>2nd pic.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={image_1} alt="image"/>

        <Carousel.Caption>
          <p className='text-danger'>
           3rd pic
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
