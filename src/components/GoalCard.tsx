import type { Goal } from "@/types/goal";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Progress from "react-native-progress";

export const GoalCard: React.FC<{
	goal: Goal;
	onIncrement: (goalId: string) => void;
}> = ({ goal, onIncrement }) => {
	const progressPercent =
		goal.target > 0 ? Math.min(1, Math.max(0, goal.progress / goal.target)) : 0;

	return (
		<Pressable style={styles.goalCard}>
			<View style={styles.titleRow}>
				<Text style={styles.goalTitle}>{goal.title}</Text>
				<Pressable
					style={({ pressed }) => [
						styles.incrementButton,
						pressed && styles.incrementButtonPressed,
					]}
					onPress={() => onIncrement(goal.id)}
				>
					<Text style={styles.buttonText}>+1</Text>
				</Pressable>
			</View>

			<Text style={styles.goalProgress}>
				{goal.progress} / {goal.target} {goal.unit} (
				{(progressPercent * 100).toFixed(0)}%)
			</Text>
			<Progress.Bar
				progress={progressPercent}
				style={styles.progressBar}
				color="#01172F"
			/>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	goalCard: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 16,
		marginBottom: 16,
	},
	goalTitle: {
		fontSize: 20,
		fontWeight: "600",
	},
	goalProgress: {
		fontSize: 16,
		color: "#666",
	},
	progressBar: {
		marginTop: 12,
		color: "#01172F",
	},
	titleRow: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 8,
	},
	incrementButton: {
		padding: 12,
		backgroundColor: "#01172F",
		borderRadius: 8,
	},
	incrementButtonPressed: {
		backgroundColor: "#08A4BD",
	},
	buttonText: {
		color: "#fff",
	},
});
