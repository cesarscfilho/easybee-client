import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="[service]"
        options={{
          title: "Contrato",
          headerBackTitle: "Voltar",
        }}
      />
    </Stack>
  );
}
