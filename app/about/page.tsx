import { VStack, Heading, Box, Text } from "@chakra-ui/react";
import React from "react";
import Hero from "../Hero";

const AboutPage = () => {
	return (
		<>
			<Hero header="About Me" />
			<Box p={50} maxW="800px" mx="auto">
				<VStack align="start" spacing={6} mt="5vh" mb="5vh">
					<Text fontSize="lg">
						I am an LCSW licensed to practice psychotherapy in Connecticut, New York, and Florida. I completed psychoanalytic training at the
						Institute of Psychoanalytic Training and Research and have an additional certificate in Child and Adolescent Psychotherapy from the New
						Hope Guild.
					</Text>
					<Text fontSize="lg">
						My training and years of clinical experience have afforded me the opportunity to develop my skills as a sensitive, attentive, and
						empathic listener. This allows me to identify and explore themes and make connections that lead to clarity and insight. Such an
						expansion of awareness often leads to lasting change. While my treatment style is rooted in psychoanalytic theory, I endeavor to remain
						flexible and open, adapting and modifying my approach to the needs, difficulties and goals of each person who comes to me seeking help.
						In addition to my clinical work, I am available for consultation and clinical supervision.
					</Text>
				</VStack>

				<VStack align="start" spacing={6} mt={12}>
					<Heading as="h2" size="xl">
						Associations
					</Heading>
					<Text fontSize="lg">Institute for Psychoanalytic Training and Research</Text>
					<Text fontSize="lg">International Psychoanalytical Association</Text>
					<Text fontSize="lg">American Psychoanalytic Association</Text>
					<Text fontSize="lg">Member of cips.usa</Text>
					<Text fontSize="lg">Connecticut Society for Psychoanalytic Psychology</Text>
				</VStack>

				<VStack align="start" spacing={6} mt={12}>
					<Heading as="h2" size="xl">
						Publications
					</Heading>
					<Text fontSize="lg">“Trauma and Embodied Memory” in Trauma, Destruction and Transformative Potential: Clinical Perspectives</Text>
					<Text fontSize="lg">
						Rifkin, M. (2016). &quot;Absolute Truth and Unbearable Psychic Pain: Psychoanalytic Perspectives on Concrete Experience&quot; a book
						review in Psychoanalytic Review
					</Text>
					<Text fontSize="lg">“Chaos in Venice: An Analyst Reflects” in The Round Robin</Text>
					<Text fontSize="lg">
						“Plight of the Imposter: The Embodied Transference and Countertransference in the Analysis of a Woman with a Congenital Deformity” in
						From Soma to Symbol: Psychosomatic Conditions and Transformative Experience
					</Text>
				</VStack>
			</Box>
		</>
	);
};

export default AboutPage;
