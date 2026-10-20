import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#08A4BD",
				tabBarInactiveTintColor: "#fff",
				headerShown: false,
				tabBarStyle: {
					backgroundColor: "#01172F",
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "home-sharp" : "home-outline"}
							color={color}
							size={24}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="goals"
				options={{
					title: "Goals",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "medal" : "medal-outline"}
							color={color}
							size={24}
						/>
					),
				}}
			/>{" "}
			<Tabs.Screen
				name="routines"
				options={{
					title: "Routines",
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "calendar" : "calendar-outline"}
							color={color}
							size={24}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
