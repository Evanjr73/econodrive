import { Text, View, Image, Animated, Pressable } from "react-native";
import { styles } from "../Styles/layout";
import { stylesButtons } from "../Styles/butons";
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'expo-router';
import {AdEventType} from "react-native-google-mobile-ads";
import {interstitialVideoad,appOpenAd} from "../constants/ads"

export default function Index() {
  const [videoloading, setVideoloading] = useState(false);
  const [appopenload, setAppopenload] = useState(false);
  
  useEffect(() => {
    const unsub = interstitialVideoad.addAdEventListener(AdEventType.LOADED, () => {
      console.log("Interstitial padrão foi carregado");
      setVideoloading(true);
      interstitialVideoad.show();
    });

    interstitialVideoad.load();

    return () => { unsub(); };
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

  const largura = useRef(new Animated.Value(0)).current;
  const [showButton, setShowButton] = useState(false);
  const router = useRouter(); 

  useEffect(() => {
    Animated.timing(largura, {
      toValue: 320,
      duration: 4000,
      useNativeDriver: false, 
    }).start(() => {
      setShowButton(true);
    });
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.containerSimples}>
        <Image source={require("../assets/images/EconoDrive.png")} style={styles.logoG} resizeMode="contain" />
        {!showButton ? 

          (<Animated.View
              style={{
                height: 50,
                width: largura,
                backgroundColor: "black",
                borderRadius: 30
              }}
            />) 
            :
          (<Pressable style={stylesButtons.vamosla} onPress={() => router.push('/carromoto')} >
            <Text style={{ color: 'black', fontSize: 16, fontFamily:'Inter-Black' }}>Vamos lá</Text>
          </Pressable>)
        }
      </View>
    </View>
  );
}
