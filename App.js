import { Button, StyleSheet, View } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import firebaseConfig from './firebaseConfig';
import { initializeApp } from "firebase/app"
import { getStorage, ref, uploadBytes } from "firebase/storage"

initializeApp(firebaseConfig);

export default function App() {

  const openGallery = async() => {
      let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1
      });

      if (!result.cancelled) {
        const storage = getStorage();
        const refer = ref(storage, result.uri.substr(result.uri.lastIndexOf('/') + 1))

        const img = await fetch(result.uri);
        const bytes = await img.blob();


        await uploadBytes(refer, bytes)
      }

  }


  return (
    <View style={styles.container}>
        <Button title='Upload image' onPress={openGallery}/>
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
