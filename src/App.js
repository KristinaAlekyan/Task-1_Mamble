import './App.css';
import './mysass.scss';
import {BsPeopleCircle} from "react-icons/all";
import {AiOutlineDollarCircle} from "react-icons/all";
import {IoCheckmarkDoneCircleOutline} from "react-icons/all"
function App() {
  
  return (
    <div className="App" >      
      <main >
        <section className = "left">
          <div className = "leftText">
            <h3>Credit Card Debt Relief</h3>
            <h4> "It would have taken me 15 years to get out of debt.With Freedom,
             it's only going to take me 3."</h4>
            <h4> -Alejandra, current FDR client</h4>
          </div>
        </section>
        <section className = "right">
          <div className = "rightTitle">
            <h2>Get Credit Card Dept Help</h2>
            <h2><b>From Ameria's top debt relief company</b></h2>
          </div>
          <div className = "rangeContainer">
              <h2> Choose your debet amount                
              </h2>
              <h4>$25000</h4>
              <form>
                <input type="range" id="vol" name="vol" min="0" max="50" />
                <input type="submit"value = "Continue" id = "continue"/>
              </form>
              <div className = "contactDiv">
                <h4>or Talk to a Certified Debet Consult</h4>
                <h2>800-910-0065</h2>
              </div>
          <div>
                
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className= "footerDiv" > 
          <div><BsPeopleCircle/></div>
          <div> Over <b>650.000</b> clients enroled</div>
        </div> 
        <div className= "footerDiv" > 
          <div><AiOutlineDollarCircle/></div>
          <div> Fee, <b>no-risk </b> credit card debt relief consultation</div>
        </div> 
        <div className= "footerDiv" > 
          <div><IoCheckmarkDoneCircleOutline/></div>
          <div> Over <b>$10 billion </b>debt resolved since 2002</div>
        </div>


      </footer>
    </div>
  );
}

export default App;
