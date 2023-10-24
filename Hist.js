import { Text, View } from 'react-native';
import { useHistory } from './Context';

export default function Hist() {
    const { history } = useHistory();

  return (
      <View>
        <Text style={{fontSize: 30, fontWeight: 500}}>Histórico: </Text>
        <Text>
            {history.map((entry, index) => (
                <p key={index}>{entry}</p>
            ))}
        </Text>
      </View>
)};