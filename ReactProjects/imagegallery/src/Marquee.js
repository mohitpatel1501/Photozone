import './Style.css';
import Salaar from './asset/Salaar.jpg';
import Bahubali from './asset/Bahubali.jpg';
import Animal from './asset/Animal.jpg';
import KGF from './asset/KGF.jpg';
import Hanuman from './asset/Hanuman.jpg';
import Shaandaar from './asset/Shaandaar.jpg';

function Marquee(){
    return(
        <>
            <h2>Image Gallery using the Marquee.js</h2>
            <div className="marquee">
                <marquee behavior="scroll" loop="true" direction="left" scrollamount="15">
                    <div className='marquee-item'><img src={Salaar} alt="" /><h3>Salaar</h3></div>
                    <div className='marquee-item'><img src={Bahubali} alt="" /><h3>Bahubali</h3></div>
                    <div className='marquee-item'><img src={Animal} alt="" /><h3>Animal</h3></div>
                    <div className='marquee-item'><img src={KGF} alt="" /><h3>KGF</h3></div>
                    <div className='marquee-item'><img src={Hanuman} alt="" /><h3>Hanuman</h3></div>
                    <div className='marquee-item'><img src={Shaandaar} alt="" /><h3>Shaandaar</h3></div>
                </marquee>
            </div>
        </>
    );
}

export default Marquee;