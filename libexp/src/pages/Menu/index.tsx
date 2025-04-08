import react from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Logo from '../../assets/BrandLogo.png';
import { Cinput } from '../../components/Cinput';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/StackNavigation';
import { useNavigation } from '@react-navigation/native';

type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function Login() {
  const navigation = useNavigation<LoginScreenProp>();

  return (

    <View style={styles.container}>
        <Text> Menu </Text>
    </View>

  );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});