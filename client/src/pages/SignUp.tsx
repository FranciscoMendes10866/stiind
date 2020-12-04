import { Flex, Box, Heading, FormControl, FormLabel, Input, Select, Button } from '@chakra-ui/react'

const SignUp = () => {
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
                                    <Input type='text' placeholder='Enter your first name' />
                                </FormControl>
                                <FormControl mt={2}>
                                    <FormLabel>Last name</FormLabel>
                                    <Input type='text' placeholder='Enter your last name' />
                                </FormControl>
                                <FormControl mt={2}>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type='email' placeholder='Enter your email address' />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl mt={2}>
                                    <FormLabel>Password</FormLabel>
                                    <Input type='password' placeholder='Enter your password' />
                                </FormControl>
                                <FormControl mt={2}>
                                    <FormLabel>Role</FormLabel>
                                    <Select placeholder="Select your role">
                                        <option>Admin</option>
                                        <option>Caregiver</option>
                                        <option>Relative</option>
                                    </Select>
                                </FormControl>
                                <Button width='full' mt={10} colorScheme="teal">Sign up</Button>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default SignUp
