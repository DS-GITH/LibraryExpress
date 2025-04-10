import react from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Logo from '../../assets/BrandLogo.png';
import { Cinput } from '../../components/Cinput';
import { Pinput } from '../../components/Pinput';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigation';
import { useNavigation } from '@react-navigation/native';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<LoginScreenProp>();

    const [email, setEmail] = react.useState('EmailDoUsuario');
    const [password, setPassword] = react.useState('SenhaDoUsuario');

    async function GetLogin() {
        try {
            console.log("Email:", email, "Password:", password); 
            if (!email || !password) {
                
                console.log("Campos vazios!"); 
                return;
            }
            navigation.navigate("Menu"); 
            console.log("Logado com sucesso!"); 
        } catch (error) {
            
            console.log("Rapaz, deu algo errado no login aí:", error);
        }
    }

    return (
        <View style={styles.container}>

                <View style={styles.topBox}>
                    <Image source={Logo} style={styles.brandLogo} />
                    <Text style={styles.brandName}>Lib Exp</Text>
                </View>

                <View style={styles.midBox}>
                    <Cinput
                        label="Email"
                        Icon="email"
                        placeholder="Enter your email"
                        onChangeText={setEmail}
                        value={email}
                    />

                    <Pinput
                        label="Senha"
                        Icon="password"
                        placeholder="Enter your password"
                        onChangeText={setPassword}
                        value={password}
                    />
                                    
                <TouchableOpacity style={styles.boxButton} onPress={GetLogin}>
                        <Text style={styles.button}> Login </Text>
                    </TouchableOpacity>

                </View>
            </View>  
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topBox:{       
        width: '100%',
        height: Dimensions.get('window').height / 2.5,
        position: "absolute",
        top: 0,
        backgroundColor: "#780000",
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandLogo:{
        width: 150,
        height: 150,
        borderRadius: 50,
    },
    brandName: {
        color: '#fdf0d5',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: 3,
    },
    midBox: {
        width: Dimensions.get('window').width/ 1.5,
        marginTop: 200,
        backgroundColor: '#F4F8FF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 20,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 13,
        },
        shadowOpacity: 0.24,
        shadowRadius: 14.86,
        elevation: 18

       


    },
    boxButton:{
        backgroundColor: "#780000", 
        marginTop: 15,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: 40,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 15,
    },
    button:{
        color: '#F4F8FF',
        fontSize: 20,
        fontWeight: 'bold',
    },
})