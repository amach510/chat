## Chat App

## Project Description:
A chat app for mobile devices created through React Native; providing users the ability to send messages, images, and share location with one another, with the addition of having offline functionality to reread their history. For those that are visually impaired, the app will have text-to-speech to assist.

## Features
- Users can input their name and select a background color for the chat screen before joining.
- Exchange text messages.
- Share and receive images from the media library or the device's camera.
- Share and receive location information.
- Record, send, and receive audio messages.
- View previous messages even when offline.

## Tech used:
React Native, Expo, GiftedChat, Google Firebase, AsyncStorage, Expo ImagePicker, ExpoMediaLibrary, Expo Location, React-Native-Maps, MapView

## Set Up
- Clone the repository.
- Install Node.js. To prevent conflicts, run `nvm use 16.19.0` in the terminal.
- Install Expo by executing `npm install -g expo-cli`.
- Go to the `chat-app` folder and run `npm install`.
- Set up Firebase for your project:
    - Sign in to Google Firebase.
    - Create a new project.
    - Set up a Firestore Database in production mode.
    - Change the rules from `allow read, write: if false; to allow read, write: if true;`.
    - Register your app (</>) in the Project Overview.
- In the `chat-app folder`, install Firebase with `npm install firebase`.
- Initialize Firebase by pasting the provided Firebase configuration into `App.js`.
- Download and open the Expo Go app on your mobile device.
- From the project directory, run `npm start` or `expo start` in the terminal.