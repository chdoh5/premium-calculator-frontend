import React from 'react';
// import './App.css';






class WelcomeContainer extends React.Component {
    
    
    render(){
        return (
            <div class=" container welcome-message" >
                <h2  >EFI Premium Calculator</h2>
                    <p id="welcome-info-big">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus enim neque, rhoncus a dui ut, volutpat tristique leo. 
                    Proin vel mauris orci. Quisque dignissim eros cursus massa luctus, 
                    nec eleifend felis porttitor. Maecenas vel placerat leo. 
                    Nulla facilisi.
                    </p>

                    <button onClick={this.props.handleClick} id="start-calculator-button" class="waves-effect waves-light btn-large">Launch Premium Calculator</button>

                    <p id="welcome-info-small">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus enim neque, rhoncus a dui ut, volutpat tristique leo. 
                    Proin vel mauris orci. Quisque dignissim eros cursus massa luctus, 
                    nec eleifend felis porttitor. Maecenas vel placerat leo. 
                    Nulla facilisi.
                    </p>
            </div>
        )
    } 
}


export default WelcomeContainer;