import HomePage from "./components/HomePage";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer"
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <>
        <Nav/>
        <HomePage/>
        <Main/>
        <Footer/>
      </>
    </ChakraProvider>
  );
}

export default App;