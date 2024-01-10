import TableItem from '../TableItem/TableItem'
import {Grid} from '@chakra-ui/react'

const TableList = ({ data }) => {
    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={10} p={20}>
          { 
            data.products.map((item, index) => {
              return (
                <TableItem key={index} item={item}/>
              );
            })
          }
      </Grid>
    );
}
 
export default TableList;