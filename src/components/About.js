import food from "../images/restauranfood.jpg"

function About(){
    return(
        <div className="about">
            <section>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                    <button>Reserve Table</button>
                </div>
                <div>
                    <img src={food} alt="chef holding food"/>
                </div>
            </section>
        </div>
    );
}

export default About;