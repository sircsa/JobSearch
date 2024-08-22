import {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'

import styles from './welcome.style'

import { useRouter } from 'expo-router'
import { icons } from '../../../constants'

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Serghei</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=''
            onChange={() => { }}
            placeholder='What are you looking for?'
          />
          <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Welcome