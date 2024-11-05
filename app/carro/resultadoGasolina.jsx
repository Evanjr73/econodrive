import { Text, View, Image, Animated, Pressable, TextInput } from "react-native";
import { styles } from "../../Styles/layout";
import { stylesButtons } from "../../Styles/butons";
import { useEffect, useRef, useState } from "react";
import { useRouter } from 'expo-router'; // Hook para navegação
import {
    BannerAd,
    BannerAdSize,
    AdEventType,
    
   
  }from "react-native-google-mobile-ads";
  
  import { addBannerUnited  , interstitialVideoad, adUnitId ,appOpenAd} from "../../constants/ads"
  
  


export default function ResultadoMoto() {
    const largura = useRef(new Animated.Value(0)).current;
    const [showButton, setShowButton] = useState(false); // Controla a exibição do botão
    const router = useRouter(); // Para navegação com expo-router

    ///////////////////////cálculo///////////////////////////////////
    const [valor, setValor] = useState(5.2); // Armazena o valor como string para TextInput
    const [km, setKm] = useState(10);
    const [distancia, setDistancia] = useState(1);
    const [consumo, setConsumo] = useState(0);
    const [litros, setLitros] = useState(0);
    const [visivel, setVisivel] = useState("flex")
    const [visivelPos, setVisivelpos] = useState("none")

    const handleChangeCalcular = () => {
        // Convertendo os valores para float
        const valorNum = parseFloat(valor) || 0;
        const kmNum = parseFloat(km) || 0;
        const distanciaNum = parseFloat(distancia) || 0;
    

        // Fazendo o cálculo
        let resultado = (distanciaNum / kmNum) * valorNum;
        let litross = distancia / km 
         
        console.log("resultado", resultado);

        // Atualizando o estado de consumo
        setLitros(litross)
        setConsumo(resultado);
        setVisivel("none")
        setVisivelpos("flex")
    };
    const handleChangevisivel = () => {
        setVisivel("flex")
        setVisivelpos("none")
    }
    useEffect(() => {
        // Executa a animação uma vez ao montar o componente
        Animated.timing(largura, {
            toValue: 320,
            duration: 1000,
            useNativeDriver: false, // Não suporta native driver para largura
        }).start(() => {
            // Quando a animação terminar, exibe o botão
            setShowButton(true);
        });
    }, []); // Remova `largura` da lista de dependências

    return (
        <View style={styles.body}>
                  
            {!showButton ? (
                // Exibe a animação se o botão ainda não foi mostrado
                <View style={styles.containerSimples}>
                    <Image
                        source={require("../../assets/images/EconoDrive.png")}
                        style={styles.logoG}
                        resizeMode="contain"
                    />
                    <Animated.View
                        style={{
                            height: 50,
                            width: largura,
                            backgroundColor: "black",
                            borderRadius: 30
                        }}
                    />
                            <BannerAd
                    unitId={addBannerUnited}
                    size={BannerAdSize.FULL_BANNER}
                />
   <BannerAd
                    unitId={addBannerUnited}
                    size={BannerAdSize.FULL_BANNER}
                />

                </View>
                
            ) : (

                // Exibe o botão "Vamos lá" após a animação












                <View style={styles.containerSimplesOut}>
                    <Pressable
                        style={styles.VoltarContainer}
                        onPress={() => router.push('/carromoto')}
                    >
                        <Image
                            source={require("../../assets/images/setas-esquerda.png")}
                            style={stylesButtons.setaEsquerda}
                            resizeMode="contain"
                        />
                    </Pressable>

















                    <View style={
                        {
                            height: 500,
                            width: 400,
                            alignItems: "center",
                            marginTop: 20,
                            padding:18,
                            display: visivelPos,
                            
                          
                        }
                    }>

                        <Image
                            source={require("../../assets/images/EconoDrive.png")}
                            style={styles.logoM}
                            resizeMode="contain"
                        />
                        <Text style={{ fontSize: 25, fontFamily:'Inter-Black' }}> VALOR DE COMBUSTIVEL</Text>
                        <View style={stylesButtons.CarroMoto}>

                            <Text style={{ fontSize: 20, fontFamily:'Inter-Black' }}> R${consumo.toFixed(2)}</Text>
                        </View>

                        <Text style={{ fontSize: 20,fontFamily:'Inter-Black'   }}>QUANTIDADES DE LITROS GASTOS DE COMBUSTIVEL</Text>
                        <View style={stylesButtons.CarroMoto}>

                            <Text style={{ fontSize: 25 , fontFamily:'Inter-Black'}}> {litros.toFixed(2)} LITROS</Text>
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


                        <Image
                            source={require("../../assets/images/EconoDrive.png")}
                            style={styles.logoM}
                            resizeMode="contain"
                        />

                        {/* Campo de valor do litro da gasolina */}
                        <Text style={{ fontSize: 20 , marginBottom:10}}> VALOR DO LITRO DA GASOLINA</Text>
                        <TextInput
                            style={stylesButtons.CarroMoto}
                            placeholder="R$ 5.20"
                            keyboardType="numeric"
                            value={valor}
                            onChangeText={setValor} // Atualiza o estado `valor`
                        />

                        {/* Campo de quilometragem por litro */}
                        <Text style={{ fontSize: 20 , marginBottom:10}}> QUILOMETOR POR LITRO DE GASOLINA</Text>
                        <TextInput
                            style={stylesButtons.CarroMoto}
                            placeholder="10 KM/L"
                            keyboardType="numeric"
                            value={km}
                            onChangeText={setKm} // Atualiza o estado `km`
                        />

                        {/* Campo de distância da viagem */}
                        <Text style={{ fontSize: 20 , marginBottom:10}}> DISTANCIA DA VIAGEM EM KM</Text>
                        <TextInput
                            style={stylesButtons.CarroMoto}
                            placeholder="1 KM"
                            keyboardType="numeric"
                            value={distancia}
                            onChangeText={setDistancia} // Atualiza o estado `distancia`
                        />

                        {/* Botão de calcular */}
                        <Pressable
                            style={stylesButtons.vamosla}
                            onPress={handleChangeCalcular}
                        >
                            <Text style={{ color: 'black', fontSize: 16 }}>CALCULAR</Text>
                        </Pressable>
                    </View>
                </View>
            )}
       
              
           
           
        </View>
    );
}
