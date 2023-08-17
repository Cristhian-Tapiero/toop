'use client'
import { Container, Text } from "@chakra-ui/react"
import LayoutContainer from "@/assets/layout_container"
const WelcomeLayer = () =>{
    return(
        <LayoutContainer>
            <Container
            maxW={'none'}
            h={'100%'}
            display={'flex'}
            justifyContent={'center'}
            flexDir={'column'}
            >
                <Text
                textColor={'purple.500'}
                fontWeight={'semibold'}
                fontSize={{
                    base: '4xl',
                    sm: '6xl',
                    md: '7xl',
                    lg: '9xl'
                }} 
                alignSelf={'center'}
                textAlign={'center'}
                > 
                    Bienvenido! 
                </Text>
                <Text
                fontSize={{
                    base: 'lg',
                    sm: 'xl',
                    md: '2xl',
                    lg: '4xl'
                }}
                fontWeight={'semibold'}
                textColor={'whiteAlpha.800'}
                alignSelf={'center'}
                textAlign={'center'}
                >
                    Esto es una prueba de POO para la materia Programación II
                </Text>

            </Container>
        </LayoutContainer>
    )
}
export default WelcomeLayer