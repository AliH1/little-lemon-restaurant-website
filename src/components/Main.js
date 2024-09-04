import salad from "../images/greek salad.jpg";
import bruchetta from "../images/bruchetta.svg";
import lemon from "../images/lemon dessert.jpg";
import { SimpleGrid } from '@chakra-ui/react';
import MenuItem from "./MenuItem";

function Main(){
    return(
    <main>
        <div>
            <h2>This Weeks Specials!</h2>
            <button>Online Menu</button>
        </div>
        <SimpleGrid spacing={8} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <MenuItem src={salad}
                    alt="greek salad"
                    heading="Greek Salad"
                    text="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    price="12.99"/>
            <MenuItem src={bruchetta}
                    alt="bruchetta"
                    heading="Bruchetta"
                    text="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    price="5.99"/>
            <MenuItem src={lemon}
                       alt="lemon dessert"
                       heading="Lemon Dessert"
                       text="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                       price="5.00"/>
        </SimpleGrid>
    </main>
    );
}

export default Main;