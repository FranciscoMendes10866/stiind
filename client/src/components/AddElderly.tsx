import {
    Button,
    Drawer,
    DrawerOverlay,
    useDisclosure,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Stack,
    Box,
    FormLabel,
    Input,
    Select,
    DrawerFooter
} from '@chakra-ui/react'
import { GrAdd } from 'react-icons/gr'

const AddElderly = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button leftIcon={<GrAdd />} colorScheme="teal" onClick={onOpen} mr="4">
                Add elderly
            </Button>
            <Drawer
                size="xs"
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerHeader borderBottomWidth="1px">
                            Add a new senior
                        </DrawerHeader>
                        <DrawerBody>
                            <Stack spacing="10px">
                                <Box>
                                    <FormLabel htmlFor="firstname">First name</FormLabel>
                                    <Input
                                        id="firstname"
                                        type="text"
                                        placeholder="Enter the first name of the elderly"
                                    />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="lastname">Last name</FormLabel>
                                    <Input
                                        id="lastname"
                                        type="text"
                                        placeholder="Enter the last name of the elderly"
                                    />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="age">Age</FormLabel>
                                    <Input
                                        id="age"
                                        type="number"
                                        placeholder="Enter the age of the elderly"
                                    />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="location">Location</FormLabel>
                                    <Input
                                        id="location"
                                        type="text"
                                        placeholder="Enter the location of the elderly"
                                    />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="maritualstatus">Maritual Status</FormLabel>
                                    <Select id="maritualstatus" placeholder="Select the marital status">
                                        <option>Widower/ed</option>
                                        <option>Single</option>
                                        <option>Married</option>
                                    </Select>
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="maritualstatus">Relative</FormLabel>
                                    <Select id="maritualstatus" placeholder="Select the elderly relative">
                                        <option>Francisco Mendes</option>
                                        <option>Francisco Mendes</option>
                                        <option>Francisco Mendes</option>
                                    </Select>
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="maritualstatus">Caregiver</FormLabel>
                                    <Select id="maritualstatus" placeholder="Select the ideal caregiver">
                                        <option>Joana Marques</option>
                                        <option>Joana Marques</option>
                                        <option>Joana Marques</option>
                                    </Select>
                                </Box>
                            </Stack>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth="1px">
                            <Button variant="outline" colorScheme="teal" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="teal">Create</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}

export default AddElderly
