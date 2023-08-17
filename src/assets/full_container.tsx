'use client'
import React from "react";
import { Container } from "@chakra-ui/react";
const FullContainer = ({children} : {children : React.ReactNode}) =>{
    return(
        <Container
        position={'relative'}
        maxW={'none'}
        w={'100vw'}
        h={'100dvh'}
        display={'flex'}
        flexDir={'column'}
        >
            {children}
        </Container>
    )
}
export default FullContainer