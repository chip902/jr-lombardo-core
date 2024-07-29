import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
	return (
		<Box bg="gray.100" px={40} py={2} boxShadow="lg" as="nav" position="fixed" width="100%" zIndex="10">
			<Flex align="center">
				<NextLink href="/" passHref legacyBehavior>
					<Link variant="linkNav" fontWeight="bold" fontSize="xl">
						J.R. Lombardo, LCSW
					</Link>
				</NextLink>
				<Spacer />
				<Flex justify="space-evenly">
					<NextLink href="/about" passHref legacyBehavior>
						<Link variant="linkNav" mx={2} fontSize="xl">
							About
						</Link>
					</NextLink>
					<NextLink href="/contact" passHref legacyBehavior>
						<Link variant="linkNav" mx={2} fontSize="xl">
							Contact
						</Link>
					</NextLink>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Navbar;
