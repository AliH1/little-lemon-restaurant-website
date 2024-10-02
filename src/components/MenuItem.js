import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button} from '@chakra-ui/react';

function MenuItem(props){
    return(
      <Card maxW='sm' height='xl' bg='gray.100'>
        <CardBody>
          <Image src={props.src} alt={props.alt} borderRadius='lg'/>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{props.heading}</Heading>
              <Text>{props.text}</Text>
              <Text color='yellow.600' fontSize='2xl'>${props.price}</Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <Button aria-label="order delivery" variant='ghost' colorScheme='black'>
              Order a Delivery
            </Button>
        </CardFooter>
      </Card>
    );
}

export default MenuItem;
