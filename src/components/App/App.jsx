import {useState} from 'react';
import { getData, postData } from '../../Service/Service';
import ValueSlider from '../ValueSlider/ValueSlider';
import Spinner from '../Spinner/Spinner'
import TariffTableList from '../TableList/TableList';
import {ChakraProvider, Table, Tbody, Tr, Td, TableCaption, TableContainer, Select, Button} from '@chakra-ui/react'
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
    handlePostData()
    handleFetchData()
  } 

  const handleFetchData  = async () => {
    setLoading(true);
    try {
      const response = (await getData()).data;
      setData(response);
      setLoading(false);
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  }
  
  const handlePostData  = async () => {
    try {
      const obj = { data, region, operator, minutes, sms, gb }
      const response = (await postData(obj));
      console.log(response.data)
    } catch (error) {
      console.error('An error occurred while fetching data:', error);
    }
  }

  const valueChange = (setValue) => (value) => {
    setValue(value);
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
              <ValueSlider valueChange={valueChange(setMinutes)} maxValue={5000}/>
              </Td>
            </Tr>
            <Tr>
              <Td>SMS в мес.:</Td>
              <Td>
              <ValueSlider valueChange={valueChange(setSms)} maxValue={500}/>
              </Td>
            </Tr>
            <Tr>
              <Td>Интернет Gb в мес.:</Td>
              <Td>
              <ValueSlider valueChange={valueChange(setGb)} maxValue={500}/>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>

      {loading ? <Spinner/> : (data.length !== 0 && <TariffTableList data={data}/>)}
    
    </ChakraProvider>
  );
}

