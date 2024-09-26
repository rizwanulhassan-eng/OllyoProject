import './faqpage.js';
import './faq.css';
const Faqpage = () => {
    return (
        <div className="maindiv3">
            <div className="title">
                <p>Frequently Asked Questions</p>
            </div>
            <div className='q1'>
                <div className='sub'>
                    <p>How can I contact Inkyy Team?</p>
                    <button className='accordion'><i class="fa-solid fa-minus"></i></button>
                </div>
                <div className='panel active'>
                    <p>You can reach us through contact form on our website or by emailing us at <b>hello@inkyy.com</b> We typically respond within 24 hours</p>
                </div>
            </div>
            <div className='q2'>
                <div className='sub'>
                    <p>How can I contact Inkyy Team?</p>
                    <button className='accordion'><i class="fa-thin fa-plus"></i></button>
                </div>
            </div>
            <div className='q3'>
                <div className='sub'>
                    <p>How can I contact Inkyy Team?</p>
                    <button className='accordion'><i class="fa-thin fa-plus"></i></button>
                </div>
            </div>
            <div className='q4'>
                <div className='sub'>
                    <p>How can I contact Inkyy Team?</p>
                    <button className='accordion'><i class="fa-thin fa-plus"></i></button>
                </div>
            </div>
            <div className='q5'>
                <div className='sub'>
                    <p>How can I contact Inkyy Team?</p>
                    <button className='accordion'><i class="fa-thin fa-plus"></i></button>
                </div>
            </div>
        </div>
    );

}
export default Faqpage;