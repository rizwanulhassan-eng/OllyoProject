import React from 'react';
import './card.css';
import img1 from '../images/Rectangle.jpg'


const Card = () => {
    return (
        <div className='mainCardDiv'>
            <p style={{
                fontSize: "60px",
                fontWeight: "700",
                color: "#252432",
                marginBottom: "32px"
            }}>What We Do</p>
            <div className='content'>
                <div className='card card1 sameCard'>
                    <div className='logoofsun'>
                        <i class="fa-regular fa-sun"></i>
                    </div>
                    <p className='logoHeading'>Web Design</p>
                    <p className='logoparagraph'>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                </div>
                <div className='card card2 sameCard'>
                    <div className='logoofsun'>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <p className='logoHeading'>UI/UX Design</p>
                    <p className='logoparagraph'>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                </div>
                <div className='card card3 sameCard'>
                    <div className='logoofsun'>
                        <i class="fa-solid fa-tv"></i>
                    </div>
                    <p className='logoHeading'>Responsive Design</p>
                    <p className='logoparagraph'>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                </div>
                <div className='card card4'>
                    <div className=''>
                        <div className='logoofsun'>
                            <i class="fa-brands fa-webflow"></i>
                        </div>
                        <p className='logoHeading'>E-commerce Solution :</p>
                        <p className='logoparagraph'>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                    </div>
                    <div className=''>
                        <img className='card4image' src={img1} alt="" />
                    </div>
                </div>
                <div className='card card5'>
                    <div className='card5maindiv'>
                    <div className='card5columnsmerged'>
                        <div className='logoofsun'>
                            <i class="fa-brands fa-webflow"></i>
                        </div>
                        <p className='logoHeading'>Webflow</p>
                        <p className='logoparagraph'>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
                    </div>
                    <div className='card5columnsmerged1'>
                        <i class="fa-brands fa-webflow "></i>
                    </div>
                    </div>
                </div>
                <div className='card card6 sameCard'>
                    <div className='logoofsun'>
                        <i class="fa-solid fa-crop"></i>
                    </div>
                    <p className='logoHeading'>
                        Custom Development
                    </p>
                    <p className='logoparagraph'>
                        From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
                    </p>
                </div>


            </div>
        </div>
    );
}

export default Card;