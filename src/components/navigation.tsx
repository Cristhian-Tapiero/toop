'use client'
import { Container, Text, HStack, Button } from "@chakra-ui/react"
const Navigation = () =>{
    return(
        <Container 
        pos={'fixed'}
        top={'.5rem'}
        paddingY={'.3rem'}
        display={'flex'}
        maxW={'none'}
        w={{
            base: '80%',
            md: '70%',
            lg: '50%'
        }}
        justifyContent={'space-between'}
        alignItems={'center'}
        alignSelf={'center'}
        justifySelf={'center'}
        border={'2px'}
        borderColor={'blackAlpha.200'}
        >
            <Text 
            textColor={'green.400'}
            fontWeight={'semibold'}
            letterSpacing={'.15rem'}
            >
                TOOP
            </Text>
            <HStack 
            display={'flex'}
            gap={'1rem'}
            >
                <Button variant={'outline'}>Button 1</Button>
                <Button variant={'outline'}>Button 2</Button>
                <Button variant={'outline'}>Button 3</Button>
            </HStack>
        </Container>

    )
}
export default Navigation