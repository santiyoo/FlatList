import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { jugadores } from '../data/Jugadores';

const Item = ({ nombre, apellido }) => (
  <View style={styles.item}>
    <Text style={styles.title}>- {nombre} {apellido}</Text>
  </View>
);

const Example = () => {
  // const renderItem = ({ item }) => (
  //   <Item nombre={item.Nombre} apellido={item.Apellido} />
  // );

  return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={jugadores}
          renderItem={({item})=>
            <>
              <View style={{alignItems: 'center'}}>
                <Text>{item.Nombre} {item.Apellido}</Text>
              </View>
            </>
          }
          keyExtractor={item => item.id}
          key='index'
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
  },
});

export default Example;