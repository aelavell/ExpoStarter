import { Text, View } from 'react-native';
import tw, { useDeviceContext } from 'twrnc';

export default function App() {
  useDeviceContext(tw);

  return (
    <View style={tw`w-full h-screen bg-gray-100 flex-1`}>
      <Text style={tw`text-center font-bold mt-16`}>Open up App.js to start working on your app!</Text>
    </View>
  );
}