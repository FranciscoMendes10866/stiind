import { Flex, Box, Image, Badge, Text, Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import { Modal } from '.'

const Card = () => {
    const stateRole = useSelector(state => state.auth.role)
    return (
        <Box p="4" maxWidth="320px" borderWidth="1px" borderRadius="md">
            <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
            <Flex align="baseline" mt={4}>
                <Text
                    textTransform="uppercase"
                    fontSize="md"
                    fontWeight="bold"
                >
                    Vitor Mendes &bull;
                    </Text>
                <Badge ml={1} colorScheme="teal">54 years old</Badge>
            </Flex>
            <Text mt={4} fontSize="md">
                <b>Maritual status:</b> Married <br />
                <b>Gender:</b> Male <br />
                <b>Location:</b> Olho
            </Text>
            {stateRole === 'Admin' && (
                <Flex align="baseline" mt={4}>
                    <Modal />
                    <Button ml={2} size="sm" colorScheme="pink">Remove</Button>
                </Flex>
            )}
        </Box>
    )
}

export default Card
