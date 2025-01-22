import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

export default function Orange() {
    const router = useRouter();
  return (
    <View style={styles.wrapper}>

        <TouchableOpacity onPress={() => router.push('/')}>
            <MaterialIcons name="clear" size={30} style={styles.icon} />
        </TouchableOpacity>

        <View style={styles.container}>
            <Text style={styles.title}>Orange</Text>
            <Image source={require('../public/Orange.jpg')} style={styles.image}/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
  },

  container: {
    flex: 1,
    marginTop: 64,
    gap: 32,
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    color: "#101020",
    fontWeight: "bold",
  },

  image: {
    width: 320,
    height: 320,
  },

  icon: {
    marginLeft: 16,
    color: "#101020",
  }
});
