import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"

export default function Portfolio() {
    const [selected, setSelected] = useState("projects")

    const list = [
        {
            id: "projects",
            title: "Projects"
        },
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                    title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected}
                    id={item.id}/>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/hero-bg.jpg" alt="" />
                    <h3>Run Buddy</h3>
                </div>
                <div className="item">
                    <img src="assets/burgers.jpg" alt="" />
                    <h3>Food-Festival App</h3>
                </div>
  
            <div className="item">
                    <img src="assets/budgetapp.JPG" alt="" />
                    <h3>Budget Tracker</h3>
                </div>  
             
            <div className="item">
                    <img src="assets/pizzahunt.png" alt="" />
                    <h3>Pizza Hunt</h3>
                </div> 
            <div className="item">
                    <img src="assets/employeetracker.gif" alt="" />
                    <h3>Employee Tracker</h3>
                </div> 
            <div className="item">
                    <img src="assets/workdaysch.gif" alt="" />
                    <h3>Work Day Scheduler</h3>
                </div>
            <div className="item">
                    <img src="assets/notetaker.png" alt="" />
                    <h3>Note Taker</h3>
                </div>
            <div className="item">
                    <img src="assets/pwgen.png" alt="" />
                    <h3>Password Generator</h3>
                </div>
            <div className="item">
                    <img src="assets/weatherapp.png" alt="" />
                    <h3>Weather App</h3>
                </div>
            </div>
        </div>
    )
}
