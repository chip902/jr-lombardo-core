"use client";
import { Box, Heading, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionHeading = motion(Heading);

interface Props {
	header: String;
	subHeader?: String;
}

const Hero = ({ header, subHeader }: Props) => {
	return (
		<Box
			bgImage="url('/default-header.webp')"
			bgSize="cover"
			boxShadow="xl"
			bgPosition="center"
			height="60vh"
			display="flex"
			justifyContent="center"
			alignItems="flex-end"
			pb="25vh">
			<VStack>
				<MotionHeading
					as="h1"
					fontFamily="Raleway"
					fontWeight="thin"
					size="xl"
					color="white"
					mb={20}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}>
					{header}
				</MotionHeading>
				{subHeader && (
					<MotionHeading
						as="h2"
						fontFamily="Raleway"
						fontWeight="thin"
						size="md"
						color="white"
						mb={8}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 4 }}>
						{subHeader}
					</MotionHeading>
				)}
			</VStack>
		</Box>
	);
};

export default Hero;
