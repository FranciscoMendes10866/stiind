import { Flex, Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'

const SignIn = () => {
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
                                <Input type='email' placeholder='Enter your email address' />
                            </FormControl>
                            <FormControl mt={2}>
                                <FormLabel>Password</FormLabel>
                                <Input type='password' placeholder='Enter your password' />
                            </FormControl>
                            <Button width='full' mt={6} colorScheme="teal">Sign in</Button>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Flex>
    )
}

export default SignIn
