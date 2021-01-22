import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../theme';

const Poster = ({ movieDetails }) => {
  const {
    Poster,
    Title,
    Released,
    Runtime,
    Rated,
    Ratings,
    Type
  } = movieDetails;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: Poster }}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.type}> {Type}  </Text>
        <Text style={styles.title}> {Title} </Text>
        <View style={styles.labelContainer}>
          <Text style={styles.label}> {Released} </Text>
          <View style={styles.dot} />
          <Text style={styles.label}> {Runtime} </Text>
          <View style={styles.dot} />
          <Text style={styles.label}> {Rated} </Text>
        </View>
        <View style={styles.ratingContainer}>
          {Ratings && Ratings.map((val, index) =>  {
            return (
              <View style={styles.rating} key={index}>
                <Icon name='star' size={14} />
                <Text style={styles.label}> {val.Source} - </Text>
                <Text style={styles.label}> {val.Value} </Text>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(4),
    marginVertical: moderateScale(4),
    paddingVertical: moderateScale(8),
    backgroundColor: colors.backgroundColor,
    borderBottomColor: colors.grey.medium,
    borderBottomWidth: 0.5,
    height: moderateScale(164),
    flexDirection: 'row',
  },
  imageContainer: {
    width: moderateScale(120),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  image: {
    width: moderateScale(100),
    height: '100%',
    resizeMode: 'contain'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
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
  ratingContainer: {
    marginHorizontal: moderateScale(2),
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  type: {
    marginVertical: moderateScale(4),
    marginHorizontal: moderateScale(2),
    color: colors.grey.dark,
    fontStyle: 'italic'
  }
})

export default Poster