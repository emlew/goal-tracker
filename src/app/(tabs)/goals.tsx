import { GoalCard } from "@/components/GoalCard";
import { dummyGoals } from "@/data/goals";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalsScreen() {
	const [goals, setGoals] = useState(dummyGoals);
	const handleIncrement = (goalId: string) => {
		setGoals((currentGoals) =>
			currentGoals.map((goal) =>
				goal.id === goalId
					? {
							...goal,
							progress: goal.progress + 1,
						}
					: goal,
			),
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>My Goals</Text>
			<Text style={styles.subtitle}>
				Keep track of the things you want to accomplish.
			</Text>
			<FlatList
				data={goals}
				renderItem={({ item }) => (
					<GoalCard goal={item} onIncrement={handleIncrement} />
				)}
				keyExtractor={(goal) => goal.id}
			/>
			<Pressable
				style={({ pressed }) => [styles.fab, pressed && styles.fabPressed]}
				onPress={() => router.push("/create-goal")}
				accessibilityLabel="Create a goal"
				accessibilityRole="button"
			>
				<Ionicons name="add" size={36} color="#fff" />
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f7f7f7",
		padding: 24,
		paddingTop: 80,
	},
	text: {
		color: "#fff",
	},
	title: {
		fontSize: 32,
		fontWeight: "700",
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 16,
		marginBottom: 32,
		color: "#666",
	},
	goalCard: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 16,
		marginBottom: 16,
	},
	goalTitle: {
		fontSize: 20,
		fontWeight: "600",
		marginBottom: 8,
	},
	goalProgress: {
		fontSize: 16,
	},
	fab: {
		position: "absolute",
		bottom: 24,
		right: 24,
		width: 64,
		height: 64,
		borderRadius: 32,
		backgroundColor: "#446DF6",
		alignItems: "center",
		justifyContent: "center",
		elevation: 6,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
	},
	fabPressed: {
		opacity: 0.8,
		transform: [{ scale: 0.96 }],
	},
});
