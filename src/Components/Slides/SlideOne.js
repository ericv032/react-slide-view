import React, { Component } from 'react';

class SlideOne extends Component {
    render() {
        return(
            <div>
                <figure>
               <img src={require('../../../public/images/view-1-icon.svg')} />
               </figure>
               <div className="slides-content">
                <h3>Lorem ipsum.</h3>
                <p>Nulla eget mollis magna. Donec<br/>dapibus velit velit.</p>
                </div>
            </div>
          );  
    }
}

export default SlideOne;