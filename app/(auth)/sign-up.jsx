import { Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import {Link} from 'expo-router'

import { images} from '../../constants'
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';
import createUser from '../../lib/appwrite';


const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password:'',
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {
    createUser(form.username, form.email, form.password);
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <View>
      {/* <ScrollView> */}
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image source={images.logo}
          resizeMode='contain' className="w-[115px] h-[25px] "/>
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign Up to Aora</Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton 
          title="Sign Up"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
          />

          <View className="justify-center pt-5  flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
            Have an account already?
            </Text>
            <Link href="/sign-in" className='text-lg font-psemibold text-secondary'>
            Sign In!
            </Link>
          </View>
        </View>
      {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  )
}

export default SignUp