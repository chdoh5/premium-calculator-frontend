import React from 'react';
// import './App.css';





class Header extends React.Component {
    
    
    render(){
        return (
            <div  >
            <nav>
              <div class="nav-wrapper section #8bc34a light-green">
                <ul class="right hide-on-med-and-down">
                  <li><a href="sass.html">Español</a></li>
                  <li><a href="badges.html">Login</a></li>
                </ul>
                <img class=" logo " src="https://equitablefood.org/wp-content/uploads/logo-copy.png"></img>
              </div>
            </nav>

            <nav class="header #f1f8e9 light-green lighten-5">
              <div class=" nav-wrapper section">
              </div>
            </nav>
            </div>
          
        )
    } 
}


export default Header;