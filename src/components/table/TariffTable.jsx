import { useState, useEffect } from 'react';

import ValueSlider from '../value-slider/ValueSlider';

import {Table, Tbody, Tr, Td, TableCaption, TableContainer, Select, Button } from '@chakra-ui/react'


  
export default function TariffTable() {

  
  const [data, setData] = useState('');
  const [region, setRegion] = useState('');
  const [operator, setOperator] = useState('');

  const [minutes, setMinutes] = useState('');
  const [sms, setSms] = useState('');
  const [gb, setGb] = useState('');

  const onRequest = () => {
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
    });
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

      <TableContainer maxWidth="1600px" m="0 auto" mt="100px" borderRadius="20px">
        <Table variant='simple'>
          <Tbody>
            {data.length === 0 ? null : 
               data.products.map((item) => {
                return (
                  <>
                    <Tr>
                      <Td>{item.title}</Td>
                      <Td>{item.brand}</Td>
                      <Td>{item.category}</Td>
                      <Td>{item.price}</Td>
                    </Tr>
                  </>
                );
              })
            }
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}