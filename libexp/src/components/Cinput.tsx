import react from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type CinputProps = {
    label: string;
    Icon: keyof typeof MaterialIcons.glyphMap;
    placeholder: string;
    secureTextEntry?: boolean;
    onChangeText: (text: string) => void;
    value: string;
};

export const Cinput: React.FC<CinputProps> = ({ label, Icon, placeholder, secureTextEntry, onChangeText, value }) => {
    return (
        <>
            <TextInput>{label}</TextInput>
                <View style={styles.inputArea}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
            />
            <MaterialIcons name={Icon} size={24} color="black" style={{marginRight: 10,}} />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
        marginTop: 10,
        marginRight: 140,
    },
    inputArea: {
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