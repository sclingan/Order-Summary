import './App.css';

function App() {
  return (
  <main>
    <div className="div__card">
      <header>
        <img src='./images/illustration-hero.svg' alt=""></img>
      </header>
      <div className="div__card_info">
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on any 
          device anywhere you like!
        </p>
        <div className="div__card_plan">
         Annual Plan
         $59.99/year

         Change
      </div>
        Proceed to Payment
        Cancel Order
      </div>
    
    </div>

    <footer>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Scott Clingan</a>.
      </div>
    </footer>
  </main>
  );
}

export default App;
