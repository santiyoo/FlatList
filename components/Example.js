import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { jugadores } from '../data/Jugadores';

const Item = ({ nombre, apellido }) => (
  <View style={styles.item}>
    <Text style={styles.title}>- {nombre} {apellido}</Text>
  </View>
);

const Example = () => {
  const renderItem = ({ item }) => (
    <Item nombre={item.Nombre} apellido={item.Apellido} />
  );

  return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={jugadores}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          key='index'
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  title: {
    fontSize: 32,
  },
});

export default Example;