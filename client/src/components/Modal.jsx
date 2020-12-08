import {
    Stack,
    Flex,
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useDisclosure,
    Select,
    FormLabel,
    Input
} from '@chakra-ui/react'

const ModalComponent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box>
            <Button colorScheme="teal" size="sm" onClick={onOpen}>Edit</Button>
            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit a single elderly person</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody py={4}>
                        <Flex justify="space-between" align="center">
                            <Box>
                                <Stack spacing="10px">
                                    <FormLabel htmlFor="firstname">First name</FormLabel>
                                    <Input
                                        id="firstname"
                                        type="text"
                                        placeholder="Enter the first name of the elderly"
                                    />
                                    <FormLabel htmlFor="lastname">Last name</FormLabel>
                                    <Input
                                        id="lastname"
                                        type="text"
                                        placeholder="Enter the last name of the elderly"
                                    />
                                    <FormLabel htmlFor="age">Age</FormLabel>
                                    <Input
                                        id="age"
                                        type="number"
                                        placeholder="Enter the age of the elderly"
                                    />
                                    <FormLabel htmlFor="location">Location</FormLabel>
                                    <Input
                                        id="location"
                                        type="text"
                                        placeholder="Enter the location of the elderly"
                                    />
                                </Stack>
                            </Box>
                            <Box>
                                <Stack spacing="10px">
                                    <FormLabel htmlFor="gender">Gender</FormLabel>
                                    <Select id="gender" placeholder="Select the gender">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Select>
                                    <FormLabel htmlFor="maritualstatus">Maritual Status</FormLabel>
                                    <Select id="maritualstatus" placeholder="Select the marital status">
                                        <option>Widower/ed</option>
                                        <option>Single</option>
                                        <option>Married</option>
                                    </Select>
                                    <FormLabel htmlFor="relative">Relative</FormLabel>
                                    <Input
                                        id="relative"
                                        type="text"
                                        placeholder="Enter the relative id"
                                    />
                                    <FormLabel htmlFor="caregiver">Caregiver</FormLabel>
                                    <Input
                                        id="caregiver"
                                        type="text"
                                        placeholder="Enter the caregiver id"
                                    />
                                </Stack>
                            </Box>
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="ghost" colorScheme="teal" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme="teal">Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default ModalComponent
