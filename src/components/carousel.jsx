import img1 from '../images/carouselpic1.jpg';
import img2 from '../images/carouselpic2.png';
import img3 from '../images/carouselpic3.jpg';
import './carousel.css';

const Carouselpage = () => {
  return (
    <div className='maindiv' style={{
      position:'relative',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "32px"
    }}>
      <button
        className="prev carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"><i class="fa-solid fa-arrow-left"></i></span>
        <span className="visually-hidden">Previous</span>
        {/* <i class="fa-solid fa-arrow-left"></i> */}
      </button>
      <button
        className="next carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true">
        <i class="fa-solid fa-arrow-right " ></i>
        </span>
        <span className="visually-hidden">Next</span>
        {/* <i class="fa-solid fa-arrow-right " ></i> */}
      </button>
      <div className='carouseltitle'>
        <p >Check Our Work</p>
      </div>
      <div className='carouseldetails'>
        <p >Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.</p>
      </div>
      <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          
         <img src={img1} alt="noimage"/>
        </div>
        <div className="carousel-item">
        <img src={img2} alt="noimage"/>
        </div>
        <div className="carousel-item">
        <img src={img3} alt="noimage"/>
        </div>
      </div>
      
      
    </div>
    </div>
  );
}

export default Carouselpage;


