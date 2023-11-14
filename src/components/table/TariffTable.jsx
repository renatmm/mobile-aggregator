import { useState, useEffect } from 'react';

import ValueSlider from '../value-slider/ValueSlider';
import Spinner from '../spinner/Spinner';

import {Table, Tbody, Tr, Td, TableCaption, TableContainer, Select, Button, Grid, GridItem} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Image, Stack, Text, Divider, ButtonGroup} from '@chakra-ui/react'


  
export default function TariffTable() {

  
  const [data, setData] = useState('');
  const [region, setRegion] = useState('');
  const [operator, setOperator] = useState('');

  const [minutes, setMinutes] = useState('');
  const [sms, setSms] = useState('');
  const [gb, setGb] = useState('');

  const [loading, setLoading] = useState(false);

  const onRequest = () => {
    setLoading(true)
    // fetch('https://dummyjson.com/products/', {
    //   method: "POST", // *GET, POST, PUT, DELETE, etc.
    //   mode: "cors", // no-cors, *cors, same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "same-origin", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    // body:{
    //   "operator": JSON.stringify(operator),
    //   "region": JSON.stringify(region),
    //   "minutes": JSON.stringify(minutes),
    //   "sms": JSON.stringify(sms),
    //   "gb": JSON.stringify(gb)
    // }})
  fetch('https://dummyjson.com/products/')
    .then(res => res.json())
    .then(json => {
      setData(json);
      setTimeout(timeout, 2000);
    });
  }

  const timeout = () => {
    setLoading(false)
  }

  const changeMinutes = (value) => {
    setMinutes(value)
  }
  
  const changeSms= (value) => {
    setSms(value)
  }

  const changeGb = (value) => {
    setGb(value)
  }

  return(
    <>
      <TableContainer maxWidth="1000px" m="0 auto" mt="100px" border="1px lightGray solid" borderRadius="20px">
        <Table variant='simple'>
          <TableCaption>
            <Button onClick={onRequest} colorScheme='blue'>Подбор тарифа</Button>
          </TableCaption>
          <Tbody>
            <Tr>
              <Td>Регион:</Td>
              <Td>
                <Select onChange={(e) => setRegion(e.target.value)} placeholder='Выберите регион'>
                  <option value='Алтайский край'>Алтайский край</option>
                  <option value='Амурская область'>Амурская область</option>
                  <option value='Архангельская область'>Архангельская область</option>
                </Select>
              </Td>
            </Tr>
            <Tr>
              <Td>Оператор:</Td>
              <Td>
                <Select onChange={(e) => setOperator(e.target.value)} placeholder='Выберите оператора'>
                  <option value='MEGAFON'>MEGAFON</option>
                  <option value='TELE2'>TELE2</option>
                  <option value='MTC'>MTC</option>
                  <option value='YOTA'>YOTA</option>
                </Select>
              </Td>
            </Tr>
            <Tr>
              <Td>Минут в мес.:</Td>
              <Td>
                <ValueSlider change={changeMinutes} maxValue={5000}/>
              </Td>
            </Tr>
            <Tr>
              <Td>SMS в мес.:</Td>
              <Td>
              <ValueSlider change={changeSms} maxValue={500}/>
              </Td>
            </Tr>
            <Tr>
              <Td>Интернет Gb в мес.:</Td>
              <Td>
              <ValueSlider change={changeGb} maxValue={500}/>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>


      <Grid templateColumns='repeat(4, 1fr)' gap={10} p={20}>
        {loading ? <Spinner/> : data.length === 0 ? null : 
                data.products.map((item) => {
                  return (
                    <>
                      <Card maxW='s'>
                        <CardBody>
                          <Image
                            src={item.images[0]}
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
                    </>
                  );
              })
          }
      </Grid>
    </>
  );
}