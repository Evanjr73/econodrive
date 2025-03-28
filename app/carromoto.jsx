import { Text, View, Image, Pressable } from "react-native";
import { styles } from "../Styles/layout";
import { stylesButtons } from "../Styles/butons";
import { useEffect, useState } from "react";
import { useRouter } from 'expo-router'; 
import { AdEventType,}from "react-native-google-mobile-ads";
import { interstitialVideoad,appOpenAd} from "../constants/ads"

export default function Vamosla() {
  const [videoloading, setVideoloading] = useState(false);
  const [appopenload, setAppopenload] = useState(false);
  
  useEffect(() => {
    const unsub = interstitialVideoad.addAdEventListener(AdEventType.LOADED, () => {
      console.log("Interstitial padrão foi carregado");
      setVideoloading(true);
      interstitialVideoad.show();
    });
    interstitialVideoad.load();
    return () => {
      unsub(); 
    };
  }, []);
    
  useEffect(() => {
    const unsubb = appOpenAd.addAdEventListener(AdEventType.LOADED, () => {
      console.log("Interstitial padrão foi carregado");
      setAppopenload(true);
      appOpenAd.show();
    });
    appOpenAd.load();
    return () => {
      unsubb();
    };
  }, []);
  
  
  const router = useRouter()
  return (
    <View style={styles.body}>
      <View style={styles.containerSimples}>
        <Image source={require("../assets/images/EconoDrive.png")} style={styles.logoG} resizeMode="contain"></Image>
        <Text style={{fontSize:25 , marginBottom:10, fontFamily:'Inter-Black'}}>MINHA VIAGEM VAI SER DE </Text>
        <Pressable style={stylesButtons.CarroMoto}onPress={() => router.push('./carro/Combustivel')} >
          <Image source={ require("../assets/images/carronegro.png") }style={styles.logobuttons} resizeMode="contain"></Image>
        </Pressable>
        <Pressable style={stylesButtons.CarroMoto} onPress={() => router.push('/moto/moto')} >
            <Image source={ require("../assets/images/motonegra.png") }style={styles.logobuttons} resizeMode="contain"></Image>
        </Pressable>
      </View>
    </View>
  );
}
