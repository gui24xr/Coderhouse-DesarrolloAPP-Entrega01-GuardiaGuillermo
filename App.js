import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:60}}>Guillermo APP01</Text>
      <Text style={{fontSize:60}}>Hola Coder</Text>
      <Text style={{fontSize:60}}>1ERA PRE ENTREGA 18/8/23</Text>
      <Button style={{fontSize:60,color:"#841784"}} title='Hola Coder'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
