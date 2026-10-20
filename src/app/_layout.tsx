import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen
				name="create-goal"
				options={{
					title: "Create Goal",
					headerBackTitle: "Goals",
				}}
			/>
		</Stack>
	);
}
