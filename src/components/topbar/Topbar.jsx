import "./topbar.scss";
import {PhoneAndroidOutlined, EmailOutlined} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                  <a href="#intro" className="logo">detra.</a> 
                  <div className="itemContainer">
                      <PhoneAndroidOutlined className="icon" />
                      <span>352 875 3664</span>
                  </div>
                  <div className="itemContainer">
                      <EmailOutlined className="icon" />
                      <span>detra.gordon76@gmail.com</span>
                  </div>
                </div>
                
                    <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                      <span className="line1"></span>
                      <span className="line2"></span> 
                      <span className="line3"></span>    
                     </div>
                    </div>   
            </div>
            
        </div>
    );
}