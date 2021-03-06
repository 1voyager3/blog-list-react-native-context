import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const IndexScreen = ( { navigation } ) => {

  const { state, addBlogPost, deleteBlogPost } = useContext( Context );

  return (
      <View>

        <FlatList
            data={ state }
            keyExtractor={ ( blogPost ) => blogPost.title }
            renderItem={ ( { item } ) => {
              return (
                  <TouchableOpacity
                      onPress={ () => navigation.navigate( 'Show', {
                        id: item.id
                      } ) }
                  >
                    <View style={ styles.row }>
                      <Text
                          style={ styles.title }
                      >
                        { item.title } - { item.id }
                      </Text>
                      <TouchableOpacity>
                        <Feather
                            name="trash"
                            style={ styles.icon }
                            onPress={ () => deleteBlogPost( item.id ) }
                        />
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
              );
            } }
        />
      </View>
  );
};

IndexScreen.navigationOptions = ( { navigation } ) => {
  return {
    headerRight: () => (
        <TouchableOpacity
            onPress={ () => navigation.navigate( 'Create' ) }
        >
          <Feather
              name="plus" size={ 30 }
              style={ { marginRight: 20 } }/>
        </TouchableOpacity>
    )
  };
};

const styles = StyleSheet.create( {
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderColor: 'grey'
  },
  title: {
    fontSize: 20
  },
  icon: {
    fontSize: 20
  }
} );

export default IndexScreen;