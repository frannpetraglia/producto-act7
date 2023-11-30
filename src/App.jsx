import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {


  return (
    <ChakraProvider>
      <Header />
      <Body />
      <Footer />
    </ChakraProvider>
  )
}

export default App
