import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Hero from "../Hero";
import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<>
			<Hero header="Contact Me" />
			<Container maxW="2xl" centerContent>
				<Flex align="center" mt={12} mb={12}>
					<ContactForm />
				</Flex>
			</Container>
		</>
	);
};

export default Contact;