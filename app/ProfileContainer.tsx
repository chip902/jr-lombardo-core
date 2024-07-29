// components/ProfileContainer.tsx
import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
const ProfileContainer = () => {
	return (
		<Container flex="1" boxShadow="2xl" py={30}>
			<Flex direction={{ md: "column", lg: "row" }} align="center">
				<Flex>
					<Box boxShadow="2xl" alignItems="flex-end" justifyContent="center" flexShrink={1} mx={4} display="flex">
						<Image boxShadow="2xl" boxSize={500} src="jr-headshot.webp" alt="Profile Photo" />
					</Box>
				</Flex>
				<Box flex="1">
					<VStack align="start" spacing={4} p={10}>
						<Text fontSize="xl">
							J.R. Lombardo is a unique professional. He views counseling and psychotherapy as collaboration and partnership. It is an “us”
							process not a “you” process. J.R. will work with you to deal with life and improve the way you feel, even when the cards you have
							been dealt seem unfair or overwhelming. He can help with loneliness, uncertainty, relationship problems, and finding the right goals
							and how to achieve them. Everyone feels at times like living is a chore. It seems that others have it easier or get all the breaks.
							When you compare your insides to others&apos; outsides, you feel like you don&apos;t measure up.
						</Text>
						<Text fontSize="xl">
							Rest assured, there is hope! It is possible to have fulfillment in life, in your career, and in your relationships. You are not
							alone. Many people, even those who you may envy based on their outside appearances, struggle with the same problems. And if you are
							not sure what want out of life, J.R. can help you clarify and uncover that. Please take a moment to read more about J.R., the
							services he provides, and his method of working. Another way to determine if he is the right fit for you is to contact him. He will
							gladly answer any questions. In most cases, speaking with him directly will give you a feel as to whether he is a good fit for you.
						</Text>
					</VStack>
				</Box>
			</Flex>
		</Container>
	);
};

export default ProfileContainer;
