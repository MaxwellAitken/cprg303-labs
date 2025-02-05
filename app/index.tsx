import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {

    const router = useRouter();

    return (
        <View style={styles.container}>

            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#e3e3e3'}}>Welcome to Max's ExpoRouter App!</Text>

            <View style={styles.wrapper}>
                
                <TouchableOpacity style={styles.button} onPress={() => router.push("/lab_2")}>
                    <Text style={{fontSize: 24, color: '#e3e3e3'}}>Lab 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => router.push("/lab_3")}>
                    <Text style={{fontSize: 24, color: '#e3e3e3'}}>Lab 3</Text>
                </TouchableOpacity>
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
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
    },

    button:{
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 4,
        alignItems: 'center',
        backgroundColor: '#39494f',
    }
});
  