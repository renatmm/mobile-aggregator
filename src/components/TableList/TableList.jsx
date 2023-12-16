import TableItem from '../TableItem/TableItem'
import {Grid} from '@chakra-ui/react'

const TariffTableList = ({data}) => {
    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={10} p={20}>
          { 
            data.products.map((item) => {
              return (
                <TableItem item={item}/>
              );
            })
          }
      </Grid>
    );
}
 
export default TariffTableList;