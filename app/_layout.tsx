// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" />
//       <Stack.Screen name="carromoto" />
//       <Stack.Screen name="carro/Combustivel" />
//       <Stack.Screen name="carro/resultadoGasolina" />
//       <Stack.Screen name="carro/resultadoEtanol" />

//       <Stack.Screen name="moto/moto" />
//       <Stack.Screen name="moto/resultado" />

//     </Stack>
//   );
// }

import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <Slot></Slot>
  );
}

