import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Flex, Box, Heading, FormControl, FormLabel, Input, Select, Button } from '@chakra-ui/react'

import SignUpAction from '../store/actions/auth/SignUp'

const SignUp = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: ''
    })
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(SignUpAction(form, history))
        setForm({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            role: ''
        })
    }
    return (
        <Flex minHeight='calc(100vh - 56px)' width='full' align='center' justifyContent='center'>
            <Box
                borderWidth={1}
                px={4}
                width='full'
                maxWidth='550px'
                borderRadius={4}
                textAlign='center'
                boxShadow='lg'
            >
                <Box p={4}>
                    <Box textAlign='center'>
                        <Heading>Create new account</Heading>
                    </Box>
                    <Box my={6} textAlign='left'>
                        <Flex justify="space-between" align="center" direction="row">
                            <Box>
                                <FormControl mt={2}>
                                    <FormLabel>First name</FormLabel>
                                    <Input value={form.firstName} onChange={handleOnChange} name="firstName" type='text' placeholder='Enter your first name' />
                                </FormControl>
                                <FormControl mt={2}>
                                    <FormLabel>Last name</FormLabel>
                                    <Input value={form.lastName} onChange={handleOnChange} name="lastName" type='text' placeholder='Enter your last name' />
                                </FormControl>
                                <FormControl mt={2}>
                                    <FormLabel>Email address</FormLabel>
                                    <Input value={form.email} onChange={handleOnChange} name="email" type='email' placeholder='Enter your email address' />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl mt={2}>
                                    <FormLabel>Password</FormLabel>
                                    <Input value={form.password} onChange={handleOnChange} name="password" type='password' placeholder='Enter your password' />
                                </FormControl>
                                <FormControl mt={2}>
                                    <FormLabel>Role</FormLabel>
                                    <Select value={form.role} onChange={handleOnChange} name="role" placeholder="Select your role">
                                        <option>Admin</option>
                                        <option>Caregiver</option>
                                        <option>Relative</option>
                                    </Select>
                                </FormControl>
                                <Button onClick={handleOnSubmit} width='full' mt={10} colorScheme="teal">Sign up</Button>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default SignUp
