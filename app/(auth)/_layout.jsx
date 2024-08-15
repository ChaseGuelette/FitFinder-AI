import { Text, View } from 'react-native'
import { Stack }  from 'expo-router'
import { StatusBar } from 'expo-status-bar'

//create a seperate layout for the auth pages becuase they will all
//have different layouts than the rest of the app
//like they wont have the buttons at the bottom

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false
          }}
        />

      </Stack>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  )
}

export default AuthLayout