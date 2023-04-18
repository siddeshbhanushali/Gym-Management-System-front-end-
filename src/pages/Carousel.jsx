//import carousel1 from "../images/carousel_1.jpeg";
import carousel2 from "../images/carousel_2.jpeg";
import carousel3 from "../images/carousel_3.jpeg";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import eq1 from "../images/eq1.jpg"
import video from "../images/video.mp4"
const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="false"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
          </video>
         
        </div>
        
      </div>
     
     
    </div>
  );
};

export default Carousel;
