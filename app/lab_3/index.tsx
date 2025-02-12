import { useState }from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExitButton from '../../components/exitButton';
import IncrementButton from './components/increment_button';
import DecrementButton from './components/decrement_button';

export default function Index() {

    const [quantity, setQuantity] = useState<number>(0);
    
    return (
        <View style={styles.container}>

            <ExitButton route='/' />

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
        backgroundColor: '#14181c',
    },

    wrapper: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
    },
});
  