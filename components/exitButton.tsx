import { TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

interface ExitButtonProps {
    route: string;
}

export default function ExitButton({ route }: ExitButtonProps) {

    const router = useRouter();

    return (
        <TouchableOpacity style={{ position: 'absolute', top: 4, left: 8 }} onPress={() => router.push(route)}>
            <MaterialIcons name="clear" size={30} style={{ marginLeft: 12, color: '#a7a7a7' }} />
        </TouchableOpacity>
    );
}
