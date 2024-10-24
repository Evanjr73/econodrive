import { Text, View, Image, Animated, Pressable } from "react-native";
import { styles } from "../Styles/layout";
import { stylesButtons } from "../Styles/butons";
import { useEffect, useRef, useState } from "react";
import { Link, useRouter } from 'expo-router'; // useRouter para navegação
import {
  BannerAd,
  BannerAdSize,
  AdEventType,
  
 
}from "react-native-google-mobile-ads";
import { addBannerUnited  , interstitialVideoad, adUnitId ,appOpenAd} from "../constants/ads"


export default function Vamosla() {
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






  const router = useRouter()
  return (
    <View style={styles.body}>
      <View style={styles.containerSimples}>
        <Image source={require("../assets/images/EconoDrive.png")} style={styles.logoG} resizeMode="contain"></Image>
        <Text style={{fontSize:25 , marginBottom:10, fontFamily:'Inter-Black'}}>MINHA VIAGEM VAI SER DE </Text>
        <Pressable style={stylesButtons.CarroMoto}
          onPress={() => router.push('./carro/Combustivel')} >
          <Text style={{ fontFamily: 'Inter-Black' }}>CARRO</Text>

        </Pressable>
        <Pressable style={stylesButtons.CarroMoto}
          onPress={() => router.push('/moto/moto')} >
          <Text style={{ fontFamily: 'Inter-Black' }}>MOTO</Text>

        </Pressable>


      </View>
   



    </View>
  );
}
