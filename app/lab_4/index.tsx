import { useState }from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ExitButton from '../../components/exitButton';
import vacationDestinations from '../../constants/list_items';

export default function Index() {

    const destinations = vacationDestinations;

    const [selectedDestinations, setSelectedDestinations] = useState<{ [key: number]: boolean }>({});

    const toggleSelection = (id: number) => {
        setSelectedDestinations((prevSelected) => ({
            ...prevSelected,
            [id]: !prevSelected[id],
        }));
    };
    
    return (
        <View style={styles.container}>

            <ExitButton route='/' />

            <View style={styles.content}>
                <Text style={styles.title}>Choose the destinations you would like a quote for</Text>
                
                <View style={styles.list}>
                    {destinations.map((destination) => (
                        <TouchableOpacity key={destination.id} style={styles.destination} onPress={() => toggleSelection(destination.id)}>
                            <Text style={{ fontSize: 32 }}>
                                {selectedDestinations[destination.id] ? "\u2705" : "\u2B1C"}
                            </Text>
                            <View>
                                <Text style={{fontSize: 18, color: '#e3e3e3', fontWeight: 'bold', marginBottom: 4}}>{destination.location}</Text>
                                <Text style={{fontSize: 16, color: '#e3e3e3'}}>Price: ${destination.price}</Text>
                                <Text style={{fontSize: 16, color: '#e3e3e3'}}>Avg Temp: {destination.average_yearly_temperature}</Text>
                            </View>
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
        alignItems: "center",
        backgroundColor: '#14181c',
    },

    content: {
        marginTop: 72,
        flexDirection: 'column',
        gap: 24,
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#e3e3e3',
    },

    list: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
    },
    
    destination: {
        flexDirection: 'row',
        gap: 18,
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 4,
        alignItems: 'center',
        backgroundColor: '#456',
    },
});
  