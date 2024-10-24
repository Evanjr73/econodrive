import { Text, View, Image, Animated, Pressable } from "react-native";
import { styles } from "../Styles/layout";
import { stylesButtons } from "../Styles/butons";
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'expo-router'; // Hook para navegação

import {
  BannerAd,
  BannerAdSize,
  AdEventType,
  
 
}from "react-native-google-mobile-ads";

import { addBannerUnited  , interstitialVideoad, adUnitId ,appOpenAd} from "../constants/ads"


export default function Index() {
  const [videoloading, setVideoloading] = useState(false);
  const [appopenload, setAppopenload] = useState(false);
  
  useEffect(() => {
    const unsub = interstitialVideoad.addAdEventListener(AdEventType.LOADED, () => {
      console.log("Interstitial padrão foi carregado");
      setVideoloading(true);
      interstitialVideoad.show(); // Mostrar o anúncio quando estiver carregado
    });

    interstitialVideoad.load();

    return () => {
      unsub(); // Limpar o listener ao desmontar o componente
    };
  }, []);
    
  useEffect(() => {
    const unsubb = appOpenAd.addAdEventListener(AdEventType.LOADED, () => {
      console.log("Interstitial padrão foi carregado");
      setAppopenload(true);
      appOpenAd.show(); // Mostrar o anúncio quando estiver carregado
    });

    appOpenAd.load();

    return () => {
      unsubb(); // Limpar o listener ao desmontar o componente
    };
  }, []);











  const largura = useRef(new Animated.Value(0)).current;
  const [showButton, setShowButton] = useState(false); // Controla a exibição do botão
  const router = useRouter(); // Para navegação com expo-router

  useEffect(() => {
    // Executa a animação uma vez ao montar o componente
    Animated.timing(largura, {
      toValue: 320,
      duration: 4000,
      useNativeDriver: false, // Não suporta native driver para largura
    }).start(() => {
      // Quando a animação terminar, exibe o botão
      setShowButton(true);
    });
  }, []); // Remova `largura` da lista de dependências















  return (
    <View style={styles.body}>
      <View style={styles.containerSimples}>
        <Image
          source={require("../assets/images/EconoDrive.png")}
          style={styles.logoG}
          resizeMode="contain"
        />
  
        {!showButton ? (
          // Exibe a animação se o botão ainda não foi mostrado
          <Animated.View
            style={{
              height: 50,
              width: largura,
              backgroundColor: "black",
              borderRadius: 30
            }}
          />
        ) : (
          // Exibe o botão "Vamos lá" após a animação
          <Pressable
            style={stylesButtons.vamosla}
            onPress={() => router.push('/carromoto')} // Navega para a tela "VamosLa"
          >
            <Text style={{ color: 'black', fontSize: 16 }}>Vamos lá</Text>
          </Pressable>
        )}
     

      </View>
    </View>
  );
}
