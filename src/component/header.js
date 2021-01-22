import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { moderateScale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../theme'

const Header = ({ title, rightIconName, onRightClick }) => (
  <View style={style.container}>
    <Text style={style.text}> {title} </Text>
    {rightIconName ? (
      <TouchableOpacity onPress={() => onRightClick()}> 
        <Icon name={rightIconName} size={24} />
      </TouchableOpacity>
    ): <View />}
  </View>
)

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(8),
    borderBottomColor: colors.grey.medium,
    borderBottomWidth: 0.5,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5
  }
})

export default Header
