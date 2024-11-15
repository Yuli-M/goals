import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Inicio", headerShown: false }}
      />
      {/* headerShown:false para ocultar el header*/}
      <Stack.Screen
        name="about"
        options={{ title: "Acerca de ", headerShown: false }}
      />
      <Stack.Screen
        name="login"
        options={{ title: "Inicio de sesion ", headerShown: false }}
      />
    </Stack>
  );
}
