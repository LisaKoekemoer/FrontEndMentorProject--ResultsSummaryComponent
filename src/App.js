import './App.css';
import reaction from './images/icon-reaction.svg';
import memory from './images/icon-memory.svg';
import verbal from './images/icon-verbal.svg';
import visual from './images/icon-visual.svg';

function App() {
  return (
    <>
    <div className='card-component'>

      <div className='result-component'>
        <h2>Your Result</h2>
        <div className='result-circle'>
          <div className='percentage-total'>
            <h2>76</h2>
          </div>
          <div className='percentage-count'>
            <p>of 100</p>
          </div>
        </div>
        <div className='comment'>
          <h1>Great</h1>
          <p>Your performance exceed 65% of the people conducting the test here!</p>
        </div>
      </div>

      <div className='summary-component'>
        <h2>Summary</h2>

        <div className='indv-test-results'>
          <div className='reaction summary'>
              <img src={reaction} alt=""/>
              <p className='title'>Reaction</p>
              <p><span>80</span> / 100</p>
          </div>

          <div className='memory summary'>
              <img src={memory} alt=""/>
              <p className='title'>Memory</p>
              <p><span>92</span> / 100</p>
          </div>

          <div className='verbal summary'>
              <img src={verbal} alt=""/>
              <p className='title'>Verbal</p>
              <p><span>61</span> / 100</p>
          </div>

          <div className='visual summary'>
              <img src={visual} alt=""/>
              <p className='title'>Visual</p>
              <p><span>73</span> / 100</p>
          </div>          
        </div>
        <button type="submit">Continue</button>
      </div>  
    </div>
    </>
  );
}

export default App;
