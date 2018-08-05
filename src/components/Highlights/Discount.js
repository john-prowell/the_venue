import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import PurchaseButton from '../utils/PurchaseButton';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before June 20th</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                officiis voluptates eum sequi provident harum, quia explicabo
                natus magni, nostrum laboriosam ducimus voluptatum nemo est iste
                perspiciatis quis odio corrupti!
              </p>
              <PurchaseButton
                text="Purchase Tickets"
                background="#ffa800"
                color="#fff"
                link="http://www.google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;