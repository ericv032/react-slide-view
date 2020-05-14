import React, { Component } from 'react';
import Slider from 'react-slick';
import Styled from 'styled-components';
import SlideOne from '../Slides/SlideOne';
import SlideTwo from '../Slides/SlideTwo';
import SlideThree from '../Slides/SlideThree';

const Wrapper = Styled.div`
    width:100%
    `;

const Page = Styled.div`
    width: 100%
    `;

export default class SlideView extends Component {
    render() {
        return(
            <Wrapper>
                <Slider
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    infinite={false}
                    dots={true}
                    arrows={false}
                >
                    <Page>   
                      <SlideOne />
                    </Page>
                    <Page>
                      <SlideTwo />
                    </Page>
                    <Page>
                      <SlideThree />
                    </Page>
                </Slider>
            </Wrapper>

        );
    }
}