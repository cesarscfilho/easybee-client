import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Configurações",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: "Perfil",
          headerBackTitle: "Voltar",
        }}
      />
      <Stack.Screen
        name="cards"
        options={{
          title: "Meus cartões",
          headerBackTitle: "Voltar",
        }}
      />
      <Stack.Screen
        name="address"
        options={{
          title: "Endereços",
          headerBackTitle: "Voltar",
        }}
      />
    </Stack>
  );
}
