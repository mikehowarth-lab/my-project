import Head from 'next/head'

import { useColorMode, Heading, Container, Box, Stack, HStack, VStack, Grid, Text, Unorderlist, List, ListItem, ListIcon, Image, Icon, Badge, Flex, Spacer, Button, Link, UnorderedList } from '@chakra-ui/react'
import { MdCheckCircle, MdSettings } from "react-icons/md"


export default function Home() {
  return (

    <Container maxW="container.xl" mt={150}>

      <Box color="gray.600">
        <Heading m={4}>Hey, I'm <Text as="span" color="blue.800" p={0} m={0}>Mike</Text></Heading>
      </Box>

      <Stack spacing={3} m={4} fontSize="lg" fontWeight="medium" color="gray.600">
        <Text fontSize="xl" fontWeight="semibold">A technology consultant and fractional CTO based in Chester, UK.</Text>
        <Text>Specialising in helping small to medium sized businesses with limited in-house technical expertise.</Text>
        <Text>I work with business owners and senior management teams to help them overcome technical challenges and unlock their next stage of business growth.</Text>
        <Text>With over 20 years of commercial experience I have helped several established brands to build and execute their technology strategy.</Text>
      </Stack>

      <Grid templateColumns="repeat(2, 2fr)" gap={6}>
<Box w="100%" rounded="20px" overflow="hidden" bg="gray.700" mt={5}>
          <Box p={5}>
            <Stack>
              <Heading as="h4">Technology Consultancy</Heading>
              <Text fontSize="lg" my={2} >
                Providing an objective and fresh set of eyes to ensure you are making the right technical decisions.
              </Text>
              <List spacing={3}>
                <ListItem>
                < ListIcon as={MdCheckCircle} color="green.500"/>
                  Build vs Buy decisions</ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  Requirements Gathering</ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  Vendor Selection</ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  M&A Due Diligence</ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  Technical Project Management</ListItem>
              </List>
            </Stack>
          </Box>
        </Box>

        <Box w="100%" rounded="20px" overflow="hidden" bg="gray.700" mt={5}>
          <Box p={5}>
            <Stack>
              <Heading as="h4">CTO</Heading>
              <Text fontSize="lg"  my={2} >
                Technical leadership for your business as Chief Technology Officer/IT Director on an interim or consultancy basis.
              </Text>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  Defining target operating models
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  Recruitment, mentoring and leadership of technical teams
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  Review of working practices, processes and tooling
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  Technology roadmapping
                  </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  Evaluating ROI on technology spend
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  Working with outsourced development teams or sourcing freelance resource
                  </ListItem>
              </List>
            </Stack>
          </Box>
        </Box>
        
        <Box w="100%" rounded="20px" overflow="hidden" bg="gray.700" mt={5}>
          <Box p={5}>
            <Stack>
              <Heading as="h4">Co-Founder</Heading>
              <Text fontSize="lg" my={2} >
                Working with individuals who have early stage ideas which will improve the world around us and need technical backing to bring these to life.
              </Text>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  Technical Feasibility
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  Product Market Fit
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  Rapid Prototyping
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  MVP Launch</ListItem>
              </List>
            </Stack>
          </Box>
        </Box>
        <Box w="100%" rounded="20px" overflow="hidden" bg="gray.700" mt={5}>
          <Box p={5}>
            <Stack>
              <Heading as="h4">Developer</Heading>
              <Text fontSize="lg" my={2} >
                Full stack application development using Node.js
              </Text>
              
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500"/>
                  Bespoke web applications
                </ListItem>
                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500"/>
                  Microservices & APIs</ListItem>
                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500"/>
                  System Integration</ListItem>
              </List>
            </Stack>
          </Box>
        </Box>

      </Grid>

    </Container>

  )
}

