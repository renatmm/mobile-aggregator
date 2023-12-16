import {Card, CardBody, CardFooter, Heading, Image, Stack, Text, Divider, ButtonGroup, Button} from '@chakra-ui/react'

const TableItem = ({item}) => {
    return ( 
        <Card key={item.id} maxW='s'>
        <CardBody>
          <Image
            src={item.images[0]}
            maxW='100px'
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='' spacing='3'>
            <Heading size='md'>{item.title}</Heading>
            <Text>
              {item.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {item.price}$
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
     );
}
 
export default TableItem;