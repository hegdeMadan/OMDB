import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { moderateScale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../component/header'
import { screens } from '../navigator/constants'
import { signIn, signOut } from '../store/actions/authHandler'
import { getAuthError, getIsUserSignedIn } from '../store/reducers/authReducer'
import { colors } from '../theme'

const selectAuthState = state => getIsUserSignedIn(state)
const selectAuthError = state => getAuthError(state)

const Profile = ({ navigation }) => {
  const dispatch = useDispatch()
  const isSignedIn = useSelector(selectAuthState)
  const authError = useSelector(selectAuthError)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [inputError, setInputError] = useState(null)

  const handleSubmit = () => {
    if (email && password) {
      dispatch(signIn({email, password}))
      return
    }
    setInputError('Please enter email and password')
  }

  if (isSignedIn) {
    return ( 
      <View style={{ flex: 1 }}>
        <Header
          title='Profile'
          rightIconName='exit-to-app'
          onRightClick={() => dispatch(signOut())}
        />
        <View style={styles.noteContainer}>
          <Text style={styles.note}> Welcome To OMDB </Text>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate(screens.home)}>
            <Text style={styles.buttonText}>
              Goto Home 
            </Text>
            <Icon name='arrow-forward' size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View> 
    )
  }

  return (
    <View style={styles.container}>
      <Header title='Sign In' />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text> Email </Text>
          <TextInput
            placeholder="example@mail.com"
            style={styles.textInputBox}
            onChangeText={(val) => setEmail(val)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text> Password </Text>
          <TextInput
            placeholder='*******'
            style={styles.textInputBox}
            secureTextEntry
            onChangeText={(val) => setPassword(val)}
          />
        </View>
        {inputError || authError ? (
          <View style={styles.error}>
            <Text style={{ color: 'red' }}> {inputError || authError } </Text>
          </View>
        ) :  null}
        <View style={styles.button}>
          <Button
            title='Sign In'
            color={colors.primary}
            onPress={() => handleSubmit()}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  formContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: moderateScale(72),
  },
  inputContainer: {
    marginTop: moderateScale(8),
    paddingTop: moderateScale(8)
  },
  textInputBox: {
    borderBottomColor: colors.grey.dark,
    borderBottomWidth: 0.5,
    width: '100%',
  },
  label: {
    marginBottom: moderateScale(4),
    paddingLeft: moderateScale(4),
  },
  button: {
    marginTop: moderateScale(40),
    borderRadius: 50,
    overflow: 'hidden',
  },
  error: {
    paddingVertical: moderateScale(4)
  },
  noteContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
    alignItems:  'center'
  },
  note: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonText: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: moderateScale(4)
  },
  iconButton: {
    marginTop: moderateScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default Profile
