import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const AboutContest = ({}) => {
    return (
        <Box w="100%" p="5">
            <Heading
                fontSize="4xl"
                textAlign="center"
                my={{ lg: '35px', base: '10px' }}
                mx="auto"
            >
                About the Contest
            </Heading>
            <Box w={{ xl: '45%', lg: '60%', base: '95%' }} mx="auto">
                <Text
                    fontSize={{ lg: 'xl', base: 'lg' }}
                    my="5"
                    lineHeight="32px"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis blandit posuere est, eget lacinia est fermentum at.
                    Mauris et ultrices arcu. Aliquam vitae pulvinar ex. Maecenas
                    vitae luctus sapien, nec laoreet metus. Nam ultricies
                    euismod dolor id vulputate. Cras sit amet faucibus enim, in
                    pulvinar metus. Pellentesque nec facilisis sem. Integer
                    vitae dolor sit amet quam tempor commodo. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia curae; Phasellus vel massa et dolor tristique
                    sollicitudin non sed velit. Vestibulum ante ipsum primis in
                    faucibus orci luctus et ultrices posuere cubilia curae;
                    Fusce in augue nulla. Nulla non lobortis purus. Proin
                    vestibulum mollis ipsum in condimentum. Ut eu sollicitudin
                    quam. Donec vehicula arcu a sapien molestie tempus. Nullam
                    et placerat nibh. Quisque blandit sed dui eget vehicula.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec sit amet enim pharetra, posuere odio nec, mollis mi.
                </Text>
            </Box>
        </Box>
    );
};

export default AboutContest;
