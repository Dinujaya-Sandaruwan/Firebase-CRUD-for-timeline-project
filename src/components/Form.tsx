import { useState } from 'react';
import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/button';
import { Container } from '@chakra-ui/layout';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        //  Perform form submission logic here
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Image:', image);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setImage(file || null);
    };

    return (
        <Container p={4} maxW="md" mx="auto">
            <form onSubmit={handleSubmit}>
                <FormControl id="name" mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </FormControl>

                <FormControl id="email" mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </FormControl>

                <FormControl id="image" mb={4}>
                    <FormLabel>Image</FormLabel>
                    <Input
                        type="file"
                        onChange={handleImageChange}
                        accept="image/*"
                        display="none"
                    />
                    <Button as="label" htmlFor="image" variant="outline">
                        Select Image
                    </Button>
                </FormControl>

                <Button mt={4} colorScheme="teal" type="submit">
                    Submit
                </Button>
                <Text>Webhook Testing Complete</Text>
            </form>
        </Container>
    );
};

export default Form;
