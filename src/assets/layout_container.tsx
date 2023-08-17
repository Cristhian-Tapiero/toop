'use client'
import React from 'react'
import { Container } from "@chakra-ui/react";
const LayoutContainer = ({children} : {children : React.ReactNode}) =>{
    return(
        <Container
        maxW={'none'}
        w={{
            base: '98%',
            sm: '85%',
            md: '80%',
            lg: '70%'
        }}
        h={'85%'}
        pos={'relative'}
        top={'5rem'}
        display={'flex'}
        flexDir={'column'}
        alignSelf={'center'}
        border={'2px'}
        borderColor={'blackAlpha.200'}
        >
            {children}
        </Container>
    )
}
export default LayoutContainer