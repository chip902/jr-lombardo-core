import { VStack, Heading, Box, Text } from "@chakra-ui/react";
import React from "react";
import Hero from "../Hero";

export const metadata = {
	title: "About Me",
	description: "FAQs and some other facts about me.",
};

const AboutPage = () => {
	return (
		<>
			<Hero header="About Me" />
			<Box p={50} maxW="800px" mx="auto">
				<VStack align="start" spacing={6} mt={12}>
					<Heading as="h2" size="sm">
						Rates
					</Heading>
					<Text fontSize="md">
						J.R.&apos;s professional fee is $300 for a 50-minute counseling session. Discounted fees may be available and may be discussed during a
						no-cost phone or e-mail consultation.
					</Text>
				</VStack>
				<VStack align="start" spacing={6} mt={12}>
					<Heading as="h2" size="sm">
						Insurance
					</Heading>
					<Text fontSize="lg">
						J.R. is not an “in-network” participating provider. However, many insurance programs provide “out-of-network” benefits, which reimburse
						a percentage of your fee. J.R. will manage all paperwork and documentation and submit all claims to your insurance company for you to
						access this benefit. Many clients have used this option to make counseling more affordable.
					</Text>
				</VStack>
				<VStack align="start" spacing={6} mt={12}>
					<Heading as="h2" size="sm">
						Payment
					</Heading>
					<Text fontSize="lg">I accept cash, check, Venmo or any major credit card.</Text>
				</VStack>
				<VStack align="start" spacing={6} mt={12}>
					<Heading as="h2" size="sm">
						Any Other Questions?
					</Heading>
					<Text fontSize="lg">Please contact me for any additional questions you may have. I look forward to hearing from you!</Text>
				</VStack>
			</Box>
		</>
	);
};

export default AboutPage;
