import { Redirect } from 'expo-router';

export default function Index() {
  // Isso diz ao Expo Router: "Quando alguém chegar na rota raiz (/),
  // não mostre nada aqui. Em vez disso, redirecione-o imediatamente
  // para a rota '/(tabs)/'.
  //
  // O Expo Router então carregará o layout de abas (app/(tabs)/_layout.jsx)
  // e a tela inicial desse grupo (app/(tabs)/index.jsx).
  return <Redirect href="/(tabs)/home" />;
}