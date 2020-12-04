import { Flex, Box, Button, Heading, useColorMode } from '@chakra-ui/react'
import { DiRaphael } from 'react-icons/di'
import { CgDarkMode } from 'react-icons/cg'
import { Link } from 'react-router-dom'

import { AddElderly } from '.'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex
            justify="space-between"
            align="center"
            direction="row"
            py={2}
            px={4}
        >
            <Box p="2">
                <Heading size="md">
                    <DiRaphael />
                </Heading>
            </Box>
            <Box>
                <AddElderly />
                <Button as={Link} to="/" colorScheme="teal" mr="4">
                    Sign up
                </Button>
                <Button as={Link} to="/sign-in" colorScheme="teal">Log in</Button>
                <Button ml="4" onClick={toggleColorMode}>
                    <CgDarkMode />
                </Button>
            </Box>
        </Flex>
    )
}

export default Navbar
