import Equailibrium from './image-equilibrium.jpg';
import Avatar from './image-avatar.png';
import Ethereum from './icon-ethereum.svg';
import Clock from './icon-clock.svg';
import View from './icon-view.svg';

function Card() {
    return (
        <main className="card">
            <div className="content">
                <div className="container">
                    <img src={Equailibrium} alt="Equailibrium"></img>
                    <div className="overlay"></div>
                    <div className="view"></div>
                </div>
                <div className="top">
                    <h1>Equilibrium #3429</h1>
                    <p>Our Equilibrium collection promotes balance and calm.</p>
                </div>
                <div className="middle">
                    <div className="price">
                        <img className="ethereum" src={Ethereum} alt="ethereum"></img>
                        <span>0.041 ETH</span>
                    </div>
                    <div className="time">
                        <img className="clock" src={Clock} alt="clock"></img>
                        <span>3 days left</span>
                    </div>
                </div>
                <hr></hr>
                <div className="bottom">
                        <img className="avatar" src={Avatar} alt="avatar"></img>
                    <p>Creation of <span className="user">Jules Wyvern</span></p>
                </div>
            </div>
        </main>
    );
}

export default Card;

