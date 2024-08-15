import { Client, Account, ID } from 'react-native-appwrite';
// Init your React Native SDK
const client = new Client();

export const config ={
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'Com.jsm.aora18',
    projectId: '66bccf000006326fbba5',
    databaseId: '66bcd1490037568edb46',
    userCollectionId: '66bcd167000cc6c02b79',
    videosCollectionId: '66bcd1870008019c8d6b',
    storageId: '66bcd27a002dbb82436f'
}

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId)
    .setPlatform(config.platform) // YOUR application ID
;

const account = new Account(client);

export default async function createUser(username, email, password) {
  try {
    const response = await account.create(ID.unique(), email, password, username);
    console.log('User created:', response);
    // Handle successful user creation (e.g., navigate to a different screen)
  } catch (error) {
    console.error('Error creating user:', error);
    // Handle errors (e.g., display an error message to the user)
  }
}

// Register User
// account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
//     .then(function (response) {
//         console.log(response);
//     }, function (error) {
//         console.log(error);
//     });


