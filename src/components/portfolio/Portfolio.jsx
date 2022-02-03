import "./portfolio.scss"

export default function Portfolio() {
    
    return (
        <div className="portfolio" id="portfolio">
            <h1>portfolio.</h1>
           
            <div className="container">
                <div className="item">
                    <img src="assets/hero-bg.jpg" alt="" />
                    <h3><a href="https://detrasmental.github.io/run-buddy/" target="_blank">Run Buddy</a></h3>
                </div>
                <div className="item">
                    <img src="assets/burgers.jpg" alt="" />
                    <h3><a href="https://detrasmental.github.io/the-dinner-guru/" target="_blank">The Dinner Guru</a></h3>
                </div>
  
            <div className="item">
                    <img src="assets/budgetapp.JPG" alt="" />
                    <h3><a href="https://salty-caverns-69170.herokuapp.com/" target="_blank" rel="noreferrer">Budget Tracker</a></h3>
                </div>  
             
            <div className="item">
                    <img src="assets/employeetracker.gif" alt="" />
                    <h3><a href="https://github.com/detrasmental/Employee-Tracker" target="_blank" rel="noreferrer">Employee Tracker</a></h3>
                </div> 
            <div className="item">
                    <img src="assets/workdaysch.gif" alt="" />
                    <h3><a href="https://detrasmental.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer">Work Day Scheduler</a></h3>
                </div>
            <div className="item">
                    <img src="assets/notetaker.png" alt="" />
                    <h3><a href="https://peaceful-hollows-99290.herokuapp.com/" target="_blank" rel="noreferrer">Note Taker</a></h3>
                </div>
            <div className="item">
                    <img src="assets/pwgen.png" alt="" />
                    <h3><a href="https://detrasmental.github.io/JavaChallenge3/" target="_blank" rel="noreferrer">Password Generator</a></h3>
                </div>
            <div className="item">
                    <img src="assets/weatherapp.png" alt="" />
                    <h3><a href="https://detrasmental.github.io/Challenge6-Weather-Dashboard/" target="_blank" rel="noreferrer">Weather App</a></h3>
                </div>
        <div className="item">
                    <img src="assets/relaxnsch.png" alt="" />
                    <h3><a href="https://detrasmental.github.io/react-portfolio/" target="_blank" rel="noreferrer">Relaxn</a></h3>
                </div>
            </div>
        </div>
    )
}
