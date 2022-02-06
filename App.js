import { Button, StyleSheet, View } from 'react-native';
import { launchImageLibrary } from "react-native-image-picker";

export default function App() {
  return (
    <View style={styles.container}>
        <Button title='Upload image' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
