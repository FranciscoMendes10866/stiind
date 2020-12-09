import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'

import SignInAction from '../store/actions/auth/SignIn'

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const dispatch = useDispatch()
    const history = useHistory()
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(SignInAction(form, history))
        setForm({
            email: '',
            password: ''
        })
    }
    return (
        <Flex minHeight='calc(100vh - 56px)' width='full' align='center' justifyContent='center'>
            <Box
                borderWidth={1}
                px={4}
                width='full'
                maxWidth='500px'
                borderRadius={4}
                textAlign='center'
                boxShadow='lg'
            >
                <Box p={4}>
                    <Box textAlign='center'>
                        <Heading>Welcome back</Heading>
                    </Box>
                    <Box my={8} textAlign='left'>
                        <form>
                            <FormControl mt={2}>
                                <FormLabel>Email address</FormLabel>
                                <Input value={form.email} onChange={handleOnChange} name="email" type='email' placeholder='Enter your email address' />
                            </FormControl>
                            <FormControl mt={2}>
                                <FormLabel>Password</FormLabel>
                                <Input value={form.password} onChange={handleOnChange} name="password" type='password' placeholder='Enter your password' />
                            </FormControl>
                            <Button onClick={handleOnSubmit} width='full' mt={6} colorScheme="teal">Sign in</Button>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default SignIn
