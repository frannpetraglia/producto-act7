import React from "react";
import { useState } from 'react'
import '../../App.css';
import './Body.css';
import '../../index.css'
import { Input, Button, IconButton, Stack, Center, Container, Image, Box, Spacer, Collapse,} from '@chakra-ui/react';
import { RiSearchLine } from "react-icons/ri";
import { useDisclosure } from '@chakra-ui/react'
import fernet_ladrillos from '../../assets/fernet_ladrillos.jpg'




function Body(){
    const { isOpen, onToggle } = useDisclosure();
        
    const [cantidadDisponible, setCantidadDisponible] = useState(14);
    const [cantidad, setCantidad] = useState(0);
    const AgregarAlCarro = () => {
        if (cantidadDisponible != 0) {
            setCantidadDisponible(cantidadDisponible - 1);
            setCantidad(cantidad + 1);
        }
    };
    const QuitarDelCarro = () => {
        if (cantidad > 0) {
            setCantidadDisponible(cantidadDisponible + 1);
            setCantidad(cantidad - 1);
        }
    };

    return(
        <Stack backgroundColor='#e9dfb0' direction='column' textAlign='center'>
            <Center id="buscador"  mt={[0,1]} mb={[0,1]} p={[1,2]} direction="row" allignItems="center">                            
                <Input type="text" mr={[0,2]}  placeholder="Ingrese su producto" variant="filled"/>
                <IconButton size={['sm','lg']} borderRadius="50%" backgroundColor="#376acc" color="#e9dfb0"
                    _hover={{
                        bgColor:'#537fd5',
                        color:'#1d2c49',                        
                        transition: '300ms'
                                  
                    }}
                icon={<RiSearchLine />} />
            </Center>
            <Container direction='column'>
                <Image src={fernet_ladrillos}/>
                <Box border='1px solid    #0b0601' >
                    <Center size={['sm','lg']} backgroundColor="#d7ca91">
                        FERNET BRANCA CLASICO 750 cc
                    </Center>
                    <Box textAlign='justify' backgroundColor="#d7ca91" p={[1,2]}>
                        Aperitivo Fernet Branca de 750 mL, ideal para disfrutar en cualquier ocasión.
                        Se presenta en un pack individual para garantizar su calidad y frescura.
                    </Box>
                    <Stack direction='row' backgroundColor="#d7ca91" p={[1,2]}>
                        <Box>
                            SKU: AB479E
                        </Box>
                        <Spacer />
                        <Box>
                            PRECIO: $8700
                        </Box>
                    </Stack>
                    <Center backgroundColor="#d7ca91">
                        Cantidad Disponible {cantidadDisponible}
                    </Center>
                </Box>
                <Button size={['sm','lg']} mt={[1,2]} mr={[1,2]} 
                    onClick={AgregarAlCarro} 
                    backgroundColor="#376acc"
                    _hover={{
                        bgColor:'#537fd5',                     
                        transition: '300ms'
                                  
                    }}
                >
                    Agregar
                </Button>
                
                <Button size={['sm','lg']} mt={[1,2]} ml={[1,2]}
                 onClick={QuitarDelCarro}
                 backgroundColor="#376acc"
                 _hover={{
                    bgColor:'#537fd5',                     
                    transition: '300ms'
                              
                }}
                >
                    Quitar
                </Button>
            </Container>
            <Container>
                <Button size={['sm','lg']} onClick={onToggle} bg='#376acc'
                    _hover={{
                    bgColor:'#537fd5',                     
                    transition: '300ms'
                              
                }}
                >
                    Comprar
                </Button>
                <Collapse in={isOpen}  transition={{exit: {delay: 1}, enter: {duration: 0.5}}}>
                    <Box
                    p='40px'
                    color='white'
                    mt='4'
                    bg='#376acc'
                    rounded='md'
                    shadow='md'
                    >
                    Gracias por su Compra
                    </Box>
                </Collapse>
            </Container>

        </Stack>
    )

}

export default Body;
