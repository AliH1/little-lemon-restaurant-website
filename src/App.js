import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";


function App() {
  return (
    <ChakraProvider>
      <Nav/>
      <Main/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;