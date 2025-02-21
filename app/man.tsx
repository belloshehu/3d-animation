import { Text, View } from "react-native";
import ManScene from "./components/ManScene";
import { Suspense } from "react";

export default function ManScreen() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Suspense
				fallback={
					<View>
						<Text>Loading ...</Text>
					</View>
				}
			>
				<ManScene />
			</Suspense>
		</View>
	);
}
