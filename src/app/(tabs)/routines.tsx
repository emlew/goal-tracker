import { palette } from "@/theme/palette";
import { StyleSheet, Text, View } from "react-native";

export default function RoutinesScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Routines Screen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: palette.background,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		color: palette.prussian,
	},
});
