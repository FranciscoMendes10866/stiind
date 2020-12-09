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
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import CreatePatient from '../store/actions/patients/Create'

const AddElderly = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        picture: '',
        age: '',
        location: '',
        gender: '',
        maritualStatus: '',
        relative: '',
        caregiver: ''
    })
    const handleOnChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(CreatePatient(form))
        setForm({
            firstName: '',
            lastName: '',
            picture: '',
            age: '',
            location: '',
            gender: '',
            maritualStatus: '',
            relative: '',
            caregiver: ''
        })
        onClose()
    }
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
                                    <FormLabel htmlFor="firstName">First name</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        value={form.firstName}
                                        id="firstName"
                                        type="text"
                                        placeholder="Enter the first name of the elderly"
                                    />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="lastName">Last name</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        value={form.lastName}
                                        id="lastName"
                                        type="text"
                                        placeholder="Enter the last name of the elderly"
                                    />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="age">Age</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        value={form.age}
                                        id="age"
                                        type="number"
                                        placeholder="Enter the age of the elderly"
                                    />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="location">Location</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        value={form.location}
                                        id="location"
                                        type="text"
                                        placeholder="Enter the location of the elderly"
                                    />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="picture">Picture</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        value={form.picture}
                                        id="picture"
                                        type="url"
                                        placeholder="Enter an image link"
                                    />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="gender">Gender</FormLabel>
                                    <Select onChange={handleOnChange} value={form.gender} id="gender" placeholder="Select the gender">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Select>
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="maritualStatus">Maritual Status</FormLabel>
                                    <Select onChange={handleOnChange} value={form.maritualStatus} id="maritualStatus" placeholder="Select the marital status">
                                        <option>Widower/ed</option>
                                        <option>Single</option>
                                        <option>Married</option>
                                    </Select>
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="relative">Relative</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        value={form.relative}
                                        id="relative"
                                        type="number"
                                        placeholder="Enter the relative id"
                                    />
                                </Box>
                                <Box>
                                    <FormLabel htmlFor="caregiver">Caregiver</FormLabel>
                                    <Input
                                        onChange={handleOnChange}
                                        value={form.caregiver}
                                        id="caregiver"
                                        type="number"
                                        placeholder="Enter the caregiver id"
                                    />
                                </Box>
                            </Stack>
                        </DrawerBody>

                        <DrawerFooter borderTopWidth="1px">
                            <Button variant="ghost" colorScheme="teal" mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button onClick={handleOnSubmit} colorScheme="teal">Add</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}

export default AddElderly
