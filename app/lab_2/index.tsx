import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import fruits from '../../components/fruits';

export default function Index() {

    const router = useRouter();

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.closeButton} onPress={() => router.push('/')}>
                <MaterialIcons name="clear" size={30} style={styles.icon} />
            </TouchableOpacity>

            <View style={styles.fruitWrapper}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#e3e3e3'}}>Here are some fruits:</Text>
                <View style={styles.fruitContainer}>
                    {fruits.map((fruit) => (
                        
                        <TouchableOpacity key={fruit.name} style={[styles.fruitButton, { backgroundColor: fruit.color }]} onPress={() => router.push(fruit.route)}>
                            <Text style={{fontSize: 20, color: '#e3e3e3'}}>{fruit.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
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

    fruitWrapper: {
        justifyContent: "center",
        alignItems: "center",
    },

    fruitContainer: {
        justifyContent: "center",
        gap: 32,
        marginTop: 40,
    },

    fruitButton: {
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 4,
        alignItems: 'center',
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
  