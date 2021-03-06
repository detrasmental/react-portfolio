import "./testimonials.scss"

 function Testimonials() {
    const data = [
        {
            id: 1,
            name: "Steve Rogers",
            title: "Captain America",
            img:
              "assets/chris.jpg",
            icon: "assets/youtube.png",
            desc:
              "Before we get started, does anyone want to get out?",
              featured: true,
          }, 
          {
            id: 2,
            name: "Sam Wilson",
            title: "The Falcon",
            img:
              "assets/sam.jfif",
            icon: "assets/youtube.png",
            desc:
              "It’s really important to me that Cap never finds out about this. ",
          },
          {
            id: 3,
            name: "Bruce Banner",
            title: "Hulk Smash",
            img:
              "assets/bruce.jpg",
            icon: "assets/linkedin.png",
            desc:
              "If we can do this, you know, go back in time, why don't we just find baby Thanos, you know, and... ",
          }, 
          {
            id: 4,
            name: "Wanda Maximoff",
            title: "Scarlett Witch",
            img:
              "assets/wanda-maximoff.jpg",
            icon: "assets/twitter.png",
            desc:
              "You guys know I can move things with my mind, right?",
          },
           
    ];
    return (
        <div className="testimonials" id="testimonials">
      <h1>testimonials.</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Testimonials;