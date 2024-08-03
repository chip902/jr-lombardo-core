import React from "react";
import Hero from "./Hero";
import ProfileContainer from "./ProfileContainer";

export default function Home() {
	return (
		<>
			<Hero header="J.R. Lombardo, LCSW" subHeader="Relief is real. And it can start today." />
			<ProfileContainer />
		</>
	);
}
