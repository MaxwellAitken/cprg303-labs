import { useState }from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IncrementButton from './components/increment_button';
import DecrementButton from './components/decrement_button';
import { useRouter } from 'expo-router';

export default function Index() {
    const router = useRouter();

    const [quantity, setQuantity] = useState<number>(0);
    
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.closeButton} onPress={() => router.push('/')}>
                <MaterialIcons name="clear" size={30} style={styles.icon} />
            </TouchableOpacity>

            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#e3e3e3'}}>Increment/Decrement Button</Text>
            <Text style={{fontSize: 24, color: '#e3e3e3'}}>Quantity: {quantity}</Text>

            <View style={styles.wrapper}>
            <DecrementButton quantity={quantity} setQuantity={setQuantity} />
                <IncrementButton quantity={quantity} setQuantity={setQuantity} />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 48,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#1c1f26',
    },

    wrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
    },
    
    icon: {
        marginLeft: 16,
        color: "#999999",
    },

    closeButton: {
        position: "absolute",
        top: 16,
        left: 16,
    }
});
  