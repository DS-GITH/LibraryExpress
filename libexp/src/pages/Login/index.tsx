import react from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import Logo from '../../assets/BrandLogo.png';

export default function Login() {
    return (
        <View style={styles.container}>

                <View style={styles.topBox}>
                    <Image source={Logo} style={styles.brandLogo} />
                    <Text style={styles.brandName}>Lib Exp</Text>
                </View>

                <View style={styles.midBox}>

                </View>

                <View style={styles.bottomBox}>

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
        backgroundColor: "#f0f0f0",
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandLogo:{
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    brandName: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
})