import React from 'react'
import { useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { moderateScale } from 'react-native-size-matters'
import { useSelector, useDispatch } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from '../component/header'
import { screens } from '../navigator/constants'
import { fetchState } from '../store/actions/constants'
import { fetchMovies } from '../store/actions/fetchMovies'
import { getIsUserSignedIn } from '../store/reducers/authReducer'
import { getMoviesFetchState, getMoviesList } from '../store/reducers/moviesReducer'
import { colors } from '../theme'
import Poster from './poster'

const selectMovies = state => getMoviesList(state);
const selectMovieFetchStatus = state => getMoviesFetchState(state)
const selectAuthState = state => getIsUserSignedIn(state)

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const movieData = useSelector(selectMovies)
  const movieFetchStatus = useSelector(selectMovieFetchStatus)
  const isSignedIn = useSelector(selectAuthState)

  useEffect(() => {
    if (isSignedIn) {
      dispatch(fetchMovies())
    }
  }, [isSignedIn])

  if (!isSignedIn) {
    return (
      <View style={{ flex: 1 }}>
        <Header title='OMDB' />
        <View style={styles.noteContainer}>
          <Text style={styles.note}> Sign In To Access The Data </Text>
          <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate(screens.profile)}>
            <Text style={styles.buttonText}>
              Sign In
            </Text>
            <Icon name='arrow-forward' size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View> 
    )
  }

  if (movieFetchStatus === fetchState.PENDING || movieFetchStatus === fetchState.IDLE) {
    return  (
      <View style={styles.loader}>
        <ActivityIndicator color={colors.primary} />
      </View>
    )
  }

  if (movieFetchStatus === fetchState.FAILURE) {
    return  <Text> Failed To Load data </Text>
  }

  const renderElement = ({ item }) => <Poster movieDetails={item} />

  return (
    <View style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
      <Header title='OMDB' />
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate(screens.movieDetails)}>
        <FlatList
          data={[movieData, movieData, movieData]}
          renderItem={renderElement}
          keyExtractor={(item, index) => index.toString() }
          showsVerticalScrollIndicator={false}
        />
      </TouchableOpacity>
      <Text
        style={{
          position:  'absolute',
          bottom: 0,
          color: colors.grey.dark,
          fontSize: 14,
          fontWeight: 'bold'
        }}>
          api is returning details of only one movie
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
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

export default Home
