import React from "react";
import "./GetinTouch.css";
import theme_pattern from'../../assets/theme_pattern.svg';
import call_icon from '../../assets/call_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const GetinTouch = ()=>{

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "c887293f-3a8f-416e-bdd9-5aa32646289a");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message);
          console.log("Success", res);
        }
      }; // code copied from react web3form

    return (

        <div id="contact"className="touch">
            <div className="get-title">
                <h1>Get in Touch</h1>
                <img src= {theme_pattern}></img>
            </div>
            <div className="touch-section">
                <div className="right">
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                    <div className="contact-detail">
                            <img src={call_icon}></img>
                            <p>+91 - 9582202818</p>
                    </div>
                    <div className="contact-detail">
                            <img src={mail_icon}></img>
                            <p>goyalkanika702@gamil.com</p>
                    </div>
                        <div className="contact-detail">
                            <img src={location_icon}></img>
                            <p>UP , India</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit}className="form-left">
                    <label for="name">Your Name</label>
                    <input id="name" placeholder="Enter your name"></input>
                    <label for="email">Your Email</label>
                    <input id="email" placeholder="Enter your Email" type="email"></input>
                    <label for="text">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
export default GetinTouch;