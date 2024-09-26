import './reviewbox.css'
import img1 from '../images/reviewimg1.jpg'
import img2 from '../images/reviewimg2.jpg'
import img3 from '../images/reviewimg3.jpg'
import img4 from '../images/reviewimg4.jpg'
import img5 from '../images/reviewimg5.jpg'

const Reviewbox = () => {
    return (
        <div className="maindiv1">
            <div className="subdiv">
                <div className='imagediv'>
                    <img className='img1 imgposition1' src={img1} alt="no pic"></img>
                    <img className='img1 imgposition2' src={img2} alt="no pic"></img>
                    <img className='img1 imgposition3' src={img3} alt="no pic"></img>
                    <img className='img1 imgposition4' src={img4} alt="no pic"></img>
                    <img className='img1 imgposition5' src={img5} alt="no pic"></img>
                </div>
                <div className='reviewdiv'>
                    <div className='reviewdivpara'>
                        <p>5.0 based on 145 reviews</p>
                    </div>
                    <div className='stars'>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    <i class="fa-sharp fa-solid fa-star"></i>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Reviewbox;