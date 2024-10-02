import salad from "../images/greek salad.jpg";
import bruchetta from "../images/bruchetta.svg";
import lemon from "../images/lemon dessert.jpg";
import { Grid, GridItem } from '@chakra-ui/react';
import MenuItem from "./MenuItem";

function Specials(){
  return (
      <section className="specials">
        <Grid gap={8} templateRows='reapeat(2, 1fr)' templateColumns='repeat(5, 1fr)'>
          <GridItem rowSpan= {1} colStart={2} colEnd={4}>
            <h2>This Weeks Specials!</h2>
          </GridItem>
          <GridItem rowSpan={1} colStart={4} colEnd={5}>
            <button aria-label="menu" className="menuBtn">Online Menu</button>
          </GridItem>
          <GridItem rowStart={2} rowSpan={1} colStart={2} colEnd={3}>
            <MenuItem height="100rem" src={salad}
                    alt="greek salad"
                    heading="Greek Salad"
                    text="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                    price="12.99"/>
          </GridItem>
          <GridItem rowStart={2} colStart={3} colEnd={4}>
            <MenuItem src={bruchetta}
                    alt="bruchetta"
                    heading="Bruchetta"
                    text="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    price="5.99"/>
          </GridItem>
          <GridItem rowStart={2} colStart={4} colEnd={5}>
            <MenuItem src={lemon}
                    alt="lemon Cake"
                    heading="Lemon Cake"
                    text="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    price="5.00"/>
          </GridItem>
        </Grid>
      </section>
      );
}

export default Specials