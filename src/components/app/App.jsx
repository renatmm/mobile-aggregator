import { ChakraProvider } from "@chakra-ui/react";
import TariffTable from "../table/TariffTable";
import '../../style.css';

export default function App() {
  return(
      <ChakraProvider>
        <TariffTable/>
      </ChakraProvider>
  );
}

