# Stream Mobile with Expo

## Create Project
```bash
npx create-expo-app stream-mobile -t tabs
```

```bash
cd stream-mobile
rm -rf package-lock.json
yarn
```

## Linking repository
```bash
rm -rf .git
git init
git remote add origin https://github.com/prawee/stream-mobile.git
git add .
git commit -m "initial commit and create project"
git push -u origin master
```

## Running first
```bash
yarn start
yarn ios
yarn android
```

## Install Package

### Chat
```bash
npx expo install stream-chat-expo stream-chat-react-native
npx expo install @react-native-community/netinfo expo-file-system expo-image-manipulator expo-image-picker expo-media-library react-native-gesture-handler react-native-reanimated react-native-svg expo-clipboard
```

### Live stream
```bash
npx expo install @stream-io/video-react-native-sdk
npx expo install @stream-io/react-native-webrtc
npx expo install @config-plugins/react-native-webrtc
npx expo install react-native-incall-manager
npx expo install @notifee/react-native
```