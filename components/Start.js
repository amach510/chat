import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ImageBackground, KeyboardAvoidingView, Platform, Alert  } from 'react-native';
import { getAuth, signInAnonymously } from "firebase/auth";

const Start = ({ navigation }) => {
  const auth = getAuth();
  const [name, setName] = useState('');
  const [background, setBackground] = useState('');
  const colors = ['#707d8f', '#6d8c92', '#5370ac', '#31ceaa'];

  const signInUser = () => {
    signInAnonymously(auth)
      .then(result => {
        navigation.navigate("Chat", { name: name, background: background, userID: result.user.uid });
        Alert.alert("Signed in Successfully!");
      })
      .catch((error) => {
        Alert.alert("Unable to sign in, try later again.");
      })
}

  return (
    <ImageBackground source={require('../img/BackgroundImage.png')} style={styles.bgImage} resizeMode="cover">
      <Text style={styles.appTitle}>Welcome!</Text>
        <View style={styles.box}>
          <TextInput
              accessibilityLabel="Username input"
              accessibilityRole="text"
              style={styles.textInput}
              value={name}
              onChangeText={setName}
              placeholder='Type in your username here'
          />
          <Text style={styles.chooseBackgroundColor}>Choose Background Color</Text>
          <View style={styles.colorButtonsBox}>
            {colors.map((color, index) => (
              <TouchableOpacity
                  accessibilityLabel="Color Button"
                  accessibilityHint="Let's choose a background color for your chat."
                  accessibilityRole="button"
                  key={index}
                  style={[styles.colorButton, { backgroundColor: color }, background === color && styles.selected]}
                  onPress={() => setBackground(color)}
              />
            ))}
          </View>
            <TouchableOpacity
              accessibilityLabel="Start Chatting"
              accessibilityRole="button"
              style={styles.button}
              onPress={signInUser}>
              <Text style={styles.buttonText}>Start Chatting</Text>
            </TouchableOpacity>
          </View>
        {Platform.OS === "ios" ? <KeyboardAvoidingView behavior="padding" /> : null}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  appTitle: {
    fontSize: 45,
    fontWeight: '600',
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  box: {
    backgroundColor: '#ffffff',
    width: '88%',
    height: '44%',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'space-evenly',
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15
  },
  chooseBackgroundColor: {
    flex: 1,
    fontSize: 16,
    fontWeight: '300',
    color: '#444444',
    marginTop: 10,
  },
  colorButtonsBox: {
    flexDirection: 'row',
    width: '75%',
    justifyContent: 'space-between',
    top: 5,
    bottom: 5,
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
  selected: {
    borderColor: 'black',
    borderWidth: 3
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#8B7974',
    padding: 15,
    margin: 45,
    alignItems: 'center',
    width: '88%'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default Start;