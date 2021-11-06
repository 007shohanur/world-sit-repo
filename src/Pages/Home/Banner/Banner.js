import React from "react";
import image from '../../../image/Slider/slider 1.jpg'
import image2 from '../../../image/Slider/slider 2.jpg'
import image3 from '../../../image/Slider/slider 3.jpg'
import image4 from '../../../image/Slider/slider 4.jpg'
import image5 from '../../../image/Slider/slider 5.jpg'
import image6 from '../../../image/Slider/slider 6.jpg'

import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container mt-5 mb-5 bg-success  bg-opacity-25">
    <Carousel fade>
<Carousel.Item>
<img className="d-block rounded-3 w-100"
src={image} alt="First slide" />
<Carousel.Caption>
<h3>Thiland</h3>
<p>World most beautifull pleach here. Visit Thiland for enjoing life. There is many beautiful pleach and many old buddhas tamples.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block rounded-3 w-100"
src={image2} alt="Second slide"/>
<Carousel.Caption>
<h3>Dubai</h3>
<p>World most beautifull pleach here. Visit Dubai for enjoing life. There is many things to seen</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block rounded-3 w-100"
src={image3}alt="Third slide" />
<Carousel.Caption>
<h3>Napel</h3>
<p>World most beautifull pleach here. Visit Nepal for enjoing life.World bigest mount-avrast here.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block rounded-3 w-100"
src={image4} alt="Forth slide" />
<Carousel.Caption>
<h3>Singapor</h3>
<p>World most beautifull pleach here. Visit Singapor for enjoing life.This place is most clean in the world</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block rounded-3 w-100"
src={image5} alt="Fifth slide" />
<Carousel.Caption>
<h3>Franch</h3>
<p>World most beautifull pleach here. Visit Franch for enjoing life.This the most old kingdome in the world</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block rounded-3 w-100"
src={image6} alt="Sixth slide" />
<Carousel.Caption>
<h3>Rome</h3>
<p>World most beautifull pleach here. Visit Rome for enjoing life.This the most historical plach in the world</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>
  );
};

export default Banner;
