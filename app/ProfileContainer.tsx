// components/ProfileContainer.tsx
import { Box, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";
const ProfileContainer = () => {
	return (
		<Container flex="1" boxShadow="2xl" py={30}>
			<Flex direction={{ md: "column", lg: "row" }} align="center">
				<Box boxShadow="3xl" alignItems="flex-end" justifyContent="center" flexShrink={1} mx={40} display="flex">
					<Image src="profile-photo.jpg" alt="Profile Photo" />
				</Box>
				<Box flex="1">
					<VStack align="start" spacing={4} p={10}>
						<Text fontSize="xl">
							The impact of life&apos;s challenges on your mental and emotional well-being cannot be underestimated. Loneliness, depression,
							anxiety, and grief can affect any one of us. A current life crisis or recurrent life problems of whatever magnitude can lead to
							symptoms and poor life choices that interfere with everyday functioning and can undermine your ability to work, play, and share your
							life with others. Each of us has the capacity to not merely cope with life&apos;s struggles but to experience a profound sense of
							accomplishment at discovering inner resilience and strength. Psychotherapy offers the opportunity to find new and more adaptive
							solutions and can help enhance a sense of mastery over your inner and external life.
						</Text>
						<Text fontSize="xl">
							As a board-certified psychotherapist and psychoanalyst with over 30 years of experience, I strive to provide a welcoming, relaxed,
							and safe environment where you can feel understood and accepted. I work with individuals as well as couples to increase
							self-understanding and effectively make long-lasting changes. I also offer clinical supervision for mental health professionals who
							seek to continue their learning. Please feel free to contact me by phone or through email. I will be happy to answer any questions
							you have.
						</Text>
					</VStack>
				</Box>
			</Flex>
		</Container>
	);
};

export default ProfileContainer;
