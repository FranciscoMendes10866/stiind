import { Flex, Box, Button, Heading, useColorMode, Avatar, AvatarBadge } from '@chakra-ui/react'
import { DiRaphael } from 'react-icons/di'
import { CgDarkMode } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AddElderly } from '.'
import LogOutAction from '../store/actions/auth/LogOut'

const Navbar = () => {
    const { toggleColorMode } = useColorMode()
    const history = useHistory()
    const dispatch = useDispatch()
    const stateRole = useSelector(state => state.auth.role)
    const handleLogOut = (e) => {
        e.preventDefault()
        dispatch(LogOutAction(history))
    }
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
                {stateRole === 'caregiver' && (
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
                )}
                {stateRole === 'admin' && (
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
                )}
                {stateRole === 'relative' && (
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
                )}
                {stateRole === 'Admin' && (
                    <>
                        <AddElderly />
                        <Button as={Link} to="/admin" colorScheme="teal" mr="4">
                            Home
                        </Button>
                    </>
                )}
                {stateRole === 'Caregiver' && (
                    <Button as={Link} to="/caregiver" colorScheme="teal" mr="4">
                        Home
                    </Button>
                )}
                {stateRole === 'Relative' && (
                    <Button as={Link} to="/relative" colorScheme="teal" mr="4">
                        Home
                    </Button>
                )}
                {stateRole === null && (
                    <>
                        <Button as={Link} to="/" colorScheme="teal" mr="4">
                            Sign up
                        </Button>
                        <Button as={Link} to="/sign-in" colorScheme="teal">Sign in</Button>
                    </>
                )}
                {stateRole !== null && (
                    <Button onClick={handleLogOut} colorScheme="teal" variant="ghost">Log out</Button>
                )}
                <Button ml="4" onClick={toggleColorMode}>
                    <CgDarkMode />
                </Button>
            </Box>
        </Flex>
    )
}

export default Navbar
