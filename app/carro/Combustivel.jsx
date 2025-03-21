import { Text, View, Image, Pressable } from "react-native";
import { styles } from "../../Styles/layout";
import { stylesButtons } from "../../Styles/butons";
import {  useRouter } from 'expo-router'; 
import { BannerAd, BannerAdSize,} from "react-native-google-mobile-ads";
import { addBannerUnited} from "../../constants/ads"

export default function CarroCombustivel() {

    const router = useRouter()

    return (
        <View style={styles.body}>
            <Pressable style={styles.VoltarContainer} onPress={() => router.push('/carromoto')}  >
                <Image source={require("../../assets/images/setas-esquerda.png")} style={stylesButtons.setaEsquerda} resizeMode="contain"></Image>
            </Pressable>
            <View style={styles.containerSimplesOut}>
                <Image source={require("../../assets/images/EconoDrive.png")} style={styles.logoM} resizeMode="contain"></Image>
                <Text style={{ fontFamily: 'Inter-black', fontSize: 30, marginBottom: 10 , fontFamily: 'Inter-black'  }}>VOU USAR  </Text>
                <Pressable style={stylesButtons.CarroMoto} onPress={() => router.push('/carro/resultadoGasolina')}  >
                    <Text style={{ fontFamily: 'Inter-black', fontSize: 20, fontFamily:'Inter-Black'}} >GASOLINA</Text>
                </Pressable>
                <Pressable style={stylesButtons.CarroMoto} onPress={() => router.push('/carro/resultadoEtanol')}  >
                    <Text style={{ fontFamily: 'Inter-black' , fontSize: 20, fontFamily:'Inter-Black'}} >ÁLCOOL</Text>
                </Pressable>
            </View>
            <BannerAd unitId={addBannerUnited} size={BannerAdSize.FULL_BANNER}/>
        </View>
    );
}
