import { Flex, Box, Button, Heading, useColorMode, Avatar, AvatarBadge } from '@chakra-ui/react'
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
                <Avatar
                    mt="1"
                    pt="1"
                    size="sm"
                    mr="4"
                    align="center"
                    src="https://bit.ly/3lTiDU5"
                >
                    <AvatarBadge boxSize="14px" bg="green.500" />
                </Avatar>
                <Avatar
                    mt="1"
                    pt="1"
                    size="sm"
                    mr="4"
                    align="center"
                    src="https://bit.ly/39Kl892"
                >
                    <AvatarBadge boxSize="14px" bg="green.500" />
                </Avatar>
                <Avatar
                    mt="1"
                    pb="1"
                    size="sm"
                    mr="4"
                    align="center"
                    src="https://bit.ly/2JJSABP"
                >
                    <AvatarBadge boxSize="14px" bg="green.500" />
                </Avatar>
                <AddElderly />
                <Button as={Link} to="/admin" colorScheme="teal" mr="4">
                    Home
                </Button>
                <Button as={Link} to="/caregiver" colorScheme="teal" mr="4">
                    Home
                </Button>
                <Button as={Link} to="/relative" colorScheme="teal" mr="4">
                    Home
                </Button>
                <Button as={Link} to="/" colorScheme="teal" mr="4">
                    Sign up
                </Button>
                <Button as={Link} to="/sign-in" colorScheme="teal">Sign in</Button>
                <Button ml="4" onClick={toggleColorMode}>
                    <CgDarkMode />
                </Button>
            </Box>
        </Flex>
    )
}

export default Navbar
