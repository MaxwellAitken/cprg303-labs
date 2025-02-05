import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

interface DecrementButtonProps {
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function DecrementButton({ quantity, setQuantity }: DecrementButtonProps ) {

    const decrement = () => {
        setQuantity(quantity - 1);
    }


    return (
        <TouchableOpacity style={styles.button}  onPress={decrement} >
            <Text style={styles.text}>-</Text>
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
        backgroundColor: "#990000",
        paddingHorizontal: 12,
        paddingVertical: 2,
        borderRadius: 6,
        width: 64,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
});
  