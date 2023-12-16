import { useState, useEffect } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import ValueSlider from '../ValueSlider/ValueSlider';
import Spinner from '../Spinner/Spinner'
import TariffTableList from '../TableList/TableList';
import {Table, Tbody, Tr, Td, TableCaption, TableContainer, Select, Button} from '@chakra-ui/react'
import '../../style.css';

export default function App() {

  const [data, setData] = useState([]);
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
      setLoading(false);
    });
  }

  const changeMinutes = (value) => {
    setMinutes(value)
  }
  
  const changeSms = (value) => {
    setSms(value)
  }

  const changeGb = (value) => {
    setGb(value)
  }

  return(
    <ChakraProvider>
      <TableContainer maxWidth="1000px" m="0 auto" mt="100px" border="3px white solid" boxShadow="2px 2px 10px white" borderRadius="20px">
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

      {loading ? <Spinner/> : (data.length !== 0 && <TariffTableList data={data}/>)}
      {/* {data.length > 0 ? 'заполнено' : 'не заполнено' } */}
    
    </ChakraProvider>
  );
}

