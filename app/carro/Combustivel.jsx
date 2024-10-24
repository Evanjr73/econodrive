import { Text, View, Image, Animated, Pressable, TextInput } from "react-native";
import { styles } from "../../Styles/layout";
import { stylesButtons } from "../../Styles/butons";
import { useEffect, useRef, useState } from "react";
import { Link, useRouter } from 'expo-router'; // useRouter para navegação
import {
    BannerAd,
    BannerAdSize,
    AdEventType,


} from "react-native-google-mobile-ads";

import { addBannerUnited, interstitialVideoad, adUnitId, appOpenAd } from "../../constants/ads"



export default function CarroCombustivel() {



    const router = useRouter()





    return (
        <View style={styles.body}>

            <Pressable style={styles.VoltarContainer}
                onPress={() => router.push('/carromoto')}  >

                <Image source={require("../../assets/images/setas-esquerda.png")} style={stylesButtons.setaEsquerda} resizeMode="contain"></Image>

            </Pressable>

            <View style={styles.containerSimplesOut}>

                <Image source={require("../../assets/images/EconoDrive.png")} style={styles.logoM} resizeMode="contain"></Image>
                <Text style={{ fontSize: 25, marginBottom: 10 , fontFamily: 'Inter-black'}}>VOU USAR  </Text>

                <Pressable style={stylesButtons.CarroMoto} onPress={() => router.push('/carro/resultadoGasolina')}  >

                    <Text style={{ fontFamily: 'Inter-black'}} >GASOLINA</Text>

                </Pressable>
                <Pressable style={stylesButtons.CarroMoto} onPress={() => router.push('/carro/resultadoEtanol')}  >
                    <Text style={{ fontFamily: 'Inter-black'}} >ÁLCOOL</Text>



                </Pressable>




                <BannerAd
                    unitId={addBannerUnited}
                    size={BannerAdSize.FULL_BANNER}
                />




                <BannerAd
                    unitId={addBannerUnited}
                    size={BannerAdSize.FULL_BANNER}
                />








            </View>



        </View>
    );
}
