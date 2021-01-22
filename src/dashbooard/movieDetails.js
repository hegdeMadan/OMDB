import React from 'react'
import { StyleSheet, View, Image, Text, ActivityIndicator } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import { fetchState } from '../store/actions/constants';
import { getMoviesFetchState, getMoviesList } from '../store/reducers/moviesReducer';
import { colors } from '../theme';

const selectMovies = state => getMoviesList(state);
const selectMovieFetchStatus = state => getMoviesFetchState(state)

const MovieDetails = () => {
  const movieData = useSelector(selectMovies)
  const movieFetchStatus = useSelector(selectMovieFetchStatus)

  const {
    Poster,
    Released,
    Runtime,
    Plot,
    imdbRating,
    Awards
  } = movieData;

  if (movieFetchStatus === fetchState.PENDING) {
    return  (
      <View style={styles.loader}>
        <ActivityIndicator color={colors.primary} />
      </View>
    )
  }

  if (movieFetchStatus === fetchState.FAILURE) {
    return  <Text> Failed To Load data </Text>
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: Poster }}
          style={styles.image}
        />
      </View>
     <View style={styles.wrapper}>
      <Text style={styles.plot}>{Plot}</Text>
        <View style={styles.labelContainer}>
          <Text style={styles.label}> <Text style={{ fontWeight: 'bold' }}>IMDb </Text> {imdbRating} </Text>
          <View style={styles.dot} />
          <Text style={styles.label}> {Released} </Text>
          <View style={styles.dot} />
          <Text style={styles.label}> {Runtime} </Text>
        </View>

        <View style={styles.awards}>
          <Text> <Text style={{ fontWeight: 'bold' }}>Awards: </Text> {Awards} </Text>
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
  wrapper: {
    paddingHorizontal: moderateScale(8)
  },
  imageContainer: {
    alignItems: 'center',
    height: moderateScale(200),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  plot: {
    paddingVertical: moderateScale(16),
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.1
  },

  label: {
    fontSize: 14
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: moderateScale(8),
    marginHorizontal: moderateScale(2)
  },
  dot: {
    width: moderateScale(3),
    height: moderateScale(3),
    borderRadius: 100,
    backgroundColor: colors.grey.dark,
    marginHorizontal: moderateScale(4)
  },
})

export default MovieDetails
