import './pricebox.css';
const Pricepage = () => {
    return (
        <div className="maindiv2">
            <div className="subdiv1">
                <p className="title">Pricing</p>
                <p className="description">Take a look at some of our recent projects to see how we've helped businesses like yours succeed online.</p>
                <div className="box">
                    <p>Let's Schedule a Meeting</p>
                    <button > Schedule Meeting </button>
                </div>
            </div>
            <div className="subdiv2">
                <p className="title">unlimited Services</p>
                <p className='description'>Take a look at some of our recent projects to see how we've helped businesses like yours succeed online. </p>
                <div className='boxes'>
                    <div className='box1'>
                        <div className='one'>
                            <div className='tikbox'>
                                <i class="fa-solid fa-check"></i>
                            </div>

                            <p>Unlimited requests</p>
                        </div>
                        <div className='two'>
                            <div className='tikbox'>
                                <i class="fa-solid fa-check"></i>
                            </div>

                            <p>Unlimited requests</p>
                        </div>
                        <div className='three'>
                            <div className='tikbox'>
                                <i class="fa-solid fa-check"></i>

                            </div>
                            <p>Unlimited requests</p>
                        </div>
                    </div>
                    <div className='box2'>
                        <div className='one'>
                            <div className='tikbox'>

                                <i class="fa-solid fa-check"></i>
                            </div>
                            <p>Unlimited requests</p>
                        </div>
                        <div className='two'>
                            <div className='tikbox'>
                                <i class="fa-solid fa-check"></i>
                            </div>
                            <p>Unlimited requests</p>
                        </div>
                        <div className='three'>
                            <div className='tikbox'>
                                <i class="fa-solid fa-check"></i>
                            </div>
                            <p>Unlimited requests</p>
                        </div>
                    </div>
                </div>
                <div className='box3'>
                    <div className='ones'>
                        <p className='title'>$3,250</p>
                        <p className='subtitle'>/mo</p>
                    </div>
                    <div className='twos'>
                    <button><i class="fa-solid fa-arrow-right-long"></i></button>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}
export default Pricepage;

