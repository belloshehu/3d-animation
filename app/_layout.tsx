import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="index" />
			<Stack.Screen name="man" />
			<Stack.Screen name="horse" />
		</Stack>
	);
}
