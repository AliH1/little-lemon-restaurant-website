import food from "../images/restauranfood.jpg"
import { Link } from 'react-router-dom';

function About(){
    return(
        <div className="about">
            <section>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
                    <Link to="/booking">
                        <button>Reserve Table</button>
                    </Link>
                </div>
                <div>
                    <img src={food} alt="chef holding food"/>
                </div>
            </section>
        </div>
    );
}

export default About;