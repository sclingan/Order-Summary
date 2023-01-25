import './App.css';
import hero from './images/illustration-hero.svg';
import music from './images/icon-music.svg';

function App() {
  return (
  <main>
    <div className="div__card">
      <header>
        <img src={hero} alt=""></img>
      </header>
      <div className="div__card_info">
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on any 
          device anywhere you like!
        </p>
        <div className="div__card_plan">
          <img className="img__music" src={music} alt=""></img>
          <div className='div__plan_info'>
            <p className="p__plan">Annual Plan</p>
            <p>$59.99/year</p>
          </div>
           <a className="a__change" href="#">Change</a>
        </div>
        <button className="btn__payment">Proceed to Payment</button>
        <button className="btn__cancel">Cancel Order</button>
      </div>
    
    </div>

    <footer>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Scott Clingan</a>.
      </div>
    </footer>
  </main>
  );
}

export default App;
