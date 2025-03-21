import { Text, View, Image, Animated, Pressable, TextInput } from "react-native";
import { styles } from "../../Styles/layout";
import { stylesButtons } from "../../Styles/butons";
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'expo-router'; 
import { BannerAd, BannerAdSize, } from "react-native-google-mobile-ads";
import { addBannerUnited } from "../../constants/ads"

export default function ResultadocarroGasolina() {
    const largura = useRef(new Animated.Value(0)).current;
    const [showButton, setShowButton] = useState(false);
    const router = useRouter();
    const [valor, setValor] = useState("5,2");
    const [km, setKm] = useState("10");
    const [distancia, setDistancia] = useState("1");
    const [consumo, setConsumo] = useState("0,00");
    const [litros, setLitros] = useState("0,00");
    const [visivel, setVisivel] = useState("flex")
    const [visivelPos, setVisivelpos] = useState("none")

    const handleChangeCalcular = () => {
        const valorNum = parseFloat(valor.replace(",", ".")) || 0;
        const kmNum = parseFloat(km.replace(",", ".")) || 0;
        const distanciaNum = parseFloat(distancia.replace(",", ".")) || 0;
        let resultado = (distanciaNum / kmNum) * valorNum;
        let litross = distanciaNum / kmNum;
        setLitros(litross.toFixed(2).replace(".", ","));
        setConsumo(resultado.toFixed(2).replace(".", ","));
        setVisivel("none")
        setVisivelpos("flex")
    };
    const handleChangevisivel = () => {
        setVisivel("flex")
        setVisivelpos("none")
    }
    useEffect(() => {
        Animated.timing(largura, {
            toValue: 320,
            duration: 1000,
            useNativeDriver: false,
        }).start(() => {
            setShowButton(true);
        });
    }, []); 

    return (
        <View style={styles.body}>
            {!showButton ? (
                <View style={styles.containerSimples}>
                    <Image source={require("../../assets/images/EconoDrive.png")} style={styles.logoG} resizeMode="contain"/>
                    <Animated.View
                        style={{
                            height: 50,
                            width: largura,
                            backgroundColor: "black",
                            borderRadius: 30
                        }}/>
                </View>
            ) : (
                <View style={styles.containerSimplesOut}>
                    <Pressable style={styles.VoltarContainer} onPress={() => router.push('/carromoto')} >
                        <Image source={require("../../assets/images/setas-esquerda.png")} style={stylesButtons.setaEsquerda} resizeMode="contain"/>
                    </Pressable>
                    <View style={{
                        height: 500,
                        width: 400,
                        alignItems: "center",
                        marginTop: 20,
                        padding: 18,
                        display: visivelPos,
                    }}>
                        <Image source={require("../../assets/images/EconoDrive.png")} style={styles.logoM} resizeMode="contain" />
                        <Text style={{ fontSize: 25, fontFamily:'Inter-Black' }}> VALOR DE COMBUSTIVEL</Text>
                        <View style={stylesButtons.CarroMoto}>
                            <Text style={{ fontSize: 25 , fontFamily:'Inter-Black' }}> R${consumo}</Text>
                        </View>
                        <Text style={{ fontSize: 25, fontFamily:'Inter-Black' }}>QUANTIDADES DE LITROS GASTOS DE COMBUSTIVEL</Text>
                        <View style={stylesButtons.CarroMoto}>
                            <Text style={{ fontSize: 25, fontFamily:'Inter-Black' }}> {litros} LITROS</Text>
                        </View>
                    </View>
                    {/* //////////////////////////////////////////////pergunta /////////////////////////// */}
                    <View style={{
                        height: "auto",
                        width: "auto",
                        alignItems: "center",
                        marginTop: 20,
                        display: visivel
                    }}>
                        <Image source={require("../../assets/images/EconoDrive.png")} style={styles.logoM} resizeMode="contain"/>

                        <Text style={{ fontSize: 20, marginBottom: 10, fontFamily:'Inter-Black' }}> VALOR DO LITRO DO GASOLINA</Text>
                        <TextInput
                            style={stylesButtons.CarroMoto}
                            placeholder="R$ 5.20"
                            keyboardType="numeric"
                            value={valor}
                            onChangeText={setValor}/>
                        <Text style={{ fontSize: 20, marginBottom: 10, fontFamily:'Inter-Black' }}> QUILOMETOR POR LITRO DE GASOLINA</Text>
                        <TextInput
                            style={stylesButtons.CarroMoto}
                            placeholder="10 KM/L"
                            keyboardType="numeric"
                            value={km}
                            onChangeText={setKm}/>
                        <Text style={{ fontSize: 20, marginBottom: 10, fontFamily:'Inter-Black' }}> DISTANCIA DA VIAGEM EM KM</Text>
                        <TextInput
                            style={stylesButtons.CarroMoto}
                            placeholder="1 KM"
                            keyboardType="numeric"
                            value={distancia}
                            onChangeText={setDistancia} />
                        <Pressable style={stylesButtons.vamosla} onPress={handleChangeCalcular}>
                            <Text style={{ color: 'black', fontSize: 16, fontFamily:'Inter-Black' }}>CALCULAR</Text>
                        </Pressable>
                    </View>
                </View>
            )}
            <BannerAd unitId={addBannerUnited} size={BannerAdSize.FULL_BANNER}/>
        </View>
    );
}
