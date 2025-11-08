import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Esta é a linha mais importante!
        Ela diz ao Stack para encontrar o grupo de rotas "(tabs)"
        e não mostrar um cabeçalho (headerShown: false).
        Isso deixa o layout de Tabs (app/(tabs)/_layout.jsx)
        assumir o controle dos cabeçalhos de cada tela.
      */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Você poderia adicionar outras telas de Stack aqui no futuro,
        como uma tela Modal, que ficaria "por cima" das abas.
        Ex: <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      */}
    </Stack>
  );
}