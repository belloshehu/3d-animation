import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
				gap: 20,
			}}
		>
			<Link href={"/horse"} style={styles.button}>
				<Text style={styles.buttonText}>Horse </Text>
			</Link>
			<Link href={"/man"} style={styles.button}>
				<Text style={styles.buttonText}>Man </Text>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: "blue",
		padding: 20,
		borderRadius: 5,
		width: "80%",
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
});
