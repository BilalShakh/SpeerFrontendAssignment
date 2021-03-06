import React from "react";
import speaker1 from '../assets/speaker1.png'
import speaker2 from '../assets/speaker2.png'
import "../App.css"

class Red extends React.Component {

    //Handles hover on the CTA button
    handleMove = (e) => {
        const btn = document.getElementsByClassName("red-demo-button")[0];
        

        var x = e.pageX-btn.offsetLeft;
        var y = e.pageY-btn.getBoundingClientRect().top;
        console.log(x,y)

        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
    };

  render() {
    return (
      <>
        <div className="red-Background">
            <img
                className="red-speaker1"
                src={speaker1}
                alt="Second slide"
            />
            <img
                className="red-speaker2"
                src={speaker2}
                alt="Second slide"
            />
            <h1 className="red-title">
                SUPERIOR SOUND
            </h1>
            <p className="red-description">
                Experience live versions of your favourite songs.
            </p>
            <button onMouseMove={this.handleMove} className="red-demo-button">
                <p className="red-demo-button-text">
                    SEE DEMO
                </p>
            </button>
            <button className="red-try-button">
                <p className="red-try-button-text">
                    TRY IT NOW
                </p>
            </button>
            
        </div>
      </>
    );
  }
}

export default Red;
