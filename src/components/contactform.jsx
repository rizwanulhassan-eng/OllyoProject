import './contactform.css';
const Contactbox = () => {
    return (
        <div className='maindiv4'>
            <p className='title'>Let's Get in Touch</p>
            <div className='formbox'>
                <form action="">
                    <div className='input-box'>
                        <p>email</p>
                        <input type="text" placeholder='example@email.com' />
                    </div>
                    <div className='input-box'>
                        <p>name</p>
                        <input type="text" placeholder='full name' />
                    </div>
                    <div className='input-box'>
                        <p>message</p>
                        <input type='text' className='message' placeholder='write your message...'></input>
                    </div>
                    <button type='submit'>get in touch</button>
                </form>
            </div>
            <div className='footerbox'>
                <div className='subbox1'>
                    <div className="logo1">
                        <div className="thundericon1">
                            <i class="fa-solid fa-bolt fa-sm"></i>
                        </div>
                        <p> FasterUI </p>
                    </div>
                    <p className='titles'>Ready to elevate your online presence? Contact us today to discuss your project and discover how we can bring your vision to life.</p>
                    <div className='lovebox'>
                        <i class="fa-solid fa-heart"></i>
                        <p>Made with love powered by inkyy.com</p>
                    </div>
                </div>
                <div className='subbox2'>
                    <div className='pages'>
                        <p>home</p>
                        <p>about</p>
                        <p>how it works</p>
                        <p>services</p>
                    </div>
                    <div>
                        <ul className="links">
                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-tiktok"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contactbox;