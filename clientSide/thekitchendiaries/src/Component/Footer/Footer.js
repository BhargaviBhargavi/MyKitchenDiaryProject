import React from "react";
import'./Footer.css';
import { footerList, footerlist, images } from "../Constant/footerConstant";

function Footer(){
    return(
        <div>
                <div className="footerpart">
                    <div className="logopart">
                        <img src="Resources/logo.png" alt="" className="footerimage"/>
                        <input type="button"  value="Sign Up" className="sign"/>
                    </div>
                    <div className="listpart">
                        {
                            footerlist.map((item,i)=>(
                                <div className="types" key={i}>{item.type}</div>
                            ))
                        }
                    </div>
                    
                    <div className="listparts">
                       {
                            footerList.map((item,i)=>(
                                <div className="types" key={i}>{item.type}</div>
                            ))
                        }
                       
                    </div>
                </div>
                <div className="border">
                    <p className="follow">Follow Us</p>
                    <div className="follow">
                        {
                            images.map((item,i)=>(
                                <img src={item.image} alt={item.alrt} className="followImg" key={i}/>
                            ))
                        }
                       
                    </div>

                </div>
            </div>
        
    

    );
}
export default Footer;