import { StyleSheet, Text, View } from "react-native";

export default function CreateGoalScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Create a Goal</Text>
			<Text>We'll build your goal form here.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 12,
	},
});
