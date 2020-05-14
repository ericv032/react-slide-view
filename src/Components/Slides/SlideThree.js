import React, { Component } from 'react';
import Styled from 'styled-components';


class SlideThree extends Component {
    render() {
        return(
            <div>
                <figure>
                <img src={require('../../../public/images/view-3-icon.svg')} />
                </figure>
                <div className="slides-content">
                <h3>Lorem ipsum.</h3>
                <p>Nulla eget mollis magna. Donec<br/>dapibus velit velit.</p>
                </div>
            </div>
        );
    }
}

export default SlideThree;