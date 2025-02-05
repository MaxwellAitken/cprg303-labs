import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

interface IncrementButtonProps {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function IncrementButton({ quantity, setQuantity }: IncrementButtonProps ) {

    const increment = () => {
        setQuantity(quantity + 1);
    }

    return (
        <TouchableOpacity style={styles.button}  onPress={increment} >
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
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

    text: {
        fontSize: 60,
        color: '#e3e3e3',
    },

    button: {
        backgroundColor: "#009900",
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 6,
        width: 64,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
});
  