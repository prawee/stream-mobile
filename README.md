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

```bash
rm -rf .git
git init
git remote add origin https://github.com/prawee/stream-mobile.git
git add .
git commit -m "initial commit and create project"
git push -u origin master
```

```bash
yarn start
yarn ios
yarn android
```