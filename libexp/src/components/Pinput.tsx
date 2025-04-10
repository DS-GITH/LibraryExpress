import react from 'react';
import { TextInput, StyleSheet, View, Touchable, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type PinputProps = {
    label: string;
    Icon: keyof typeof MaterialIcons.glyphMap;
    placeholder: string;
    secureTextEntry?: boolean;
    onChangeText: (text: string) => void;
    value: string;
};

export const Pinput: React.FC<PinputProps> = ({ label, Icon, placeholder, secureTextEntry, onChangeText, value }) => {

       const [showPassword, setShowPassword] = react.useState(true);

    
    return(
        <>
        <TextInput>{label}</TextInput>
            <View style={styles.PinputArea}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    secureTextEntry={showPassword}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <MaterialIcons name={Icon} size={24} color={showPassword ? "black" : "#780000"} style={{marginRight: 10, } } />
                    </TouchableOpacity>
            </View>

        </>
    )
};

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
        marginTop: 10,
        marginRight: 140,
    },
    PinputArea: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
    },
    input: {
        width: '86%',
        height: '100%',
        borderRadius: 10,
        paddingLeft: 10,
    },
});