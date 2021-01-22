import React from 'react'
import IonicIcons from 'react-native-vector-icons/Ionicons'
import AntIcons from 'react-native-vector-icons/AntDesign'
import { moderateScale } from 'react-native-size-matters'
import { sizes, colors } from '../theme'
// import CommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import FeatherIcons from 'react-native-vector-icons/Feather'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
// import EvilIcons from 'react-native-vector-icons/EvilIcons'

export const HomeIcon = (props) => {
  return (
    <AntIcons
      name='home'
      size={moderateScale(sizes.tabIcon)}
      color={props.focused ? colors.primary : colors.tabIcon}
    />
  )
}

export const ProfileIcon = (props) => {
  return (
    <IonicIcons
      name='person-circle-outline'
      size={moderateScale(sizes.tabIcon)}
      color={props.focused ? colors.primary : colors.tabIcon}
    />
  )
}
