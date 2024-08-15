import 'react-native-url-polyfill/auto'

import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';

import { images } from '../constants';
// import { CustomButton } from '../components';
import CustomButton from '../components/CustomButton'; 

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full" contentContainerSytle={{ height: '100%'}}>
      {/* <ScrollView contentContainerSytle={{ height: '100%'}}> */}
        <View className="w-fill  items-center  h-full px-4">
          <Image 
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Discover Endless Possibilities with 
            <Text className="text-secondary-200"> Aora</Text>
            </Text>
            <Image 
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation: embark on a journey of limitess expoloration with <Link href="/sign-in" className='text-lg font-psemibold text-secondary'>Aora</Link>
          <Link href="/sign-up" className='text-lg font-psemibold text-secondary'>Aora</Link>
          </Text>

          <CustomButton 
            title="Continue with Email"
            handlePress = {() => {}}
            containerStyles="w-full mt-7"
            
          />
          
        </View>

        <StatusBar backgroundColor='#161622 style='light />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}



