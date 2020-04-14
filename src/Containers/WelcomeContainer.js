import React from 'react';
import premiumGraphic from '../premiumGraphic.png'



class WelcomeContainer extends React.Component {




    render(){
        window.scrollTo(0,0)
        return (
            
            <div class=" container welcome-message" >
                <h2 id="HEADER"  >EFI Premium Calculator</h2>
                    <p id="welcome-info-big">
                    The EFI Premium Modeler is intended to help prospective growers
                     estimate their operation's expected bonus paid by participating buyers. 
                     The EFI Premium is calculated as a per-commodity price on pounds sold. 
                     The figure below illustrates how the EFI Premium is distributed; 
                     for more information, please email <a href="mailto:rchavez@equitablefood.org">rchavez@equitablefood.org</a>.
                    </p>

                    <button onClick={this.props.handleClick} id="start-calculator-button" class="waves-effect waves-light btn-large">Launch Premium Calculator</button>

                    <img className='premium-graphic' src={premiumGraphic} />
            </div>
        )
    } 
}


export default WelcomeContainer;