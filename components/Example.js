import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { jugadores } from '../data/Jugadores';

const Example = () => {
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Jugadores</Text>
        <FlatList
          data={jugadores}
          renderItem={({item})=>
            <>
              <View>
                <Text style={styles.subhead}>- {item.Nombre} {item.Apellido}</Text>
              </View>
            </>
          }
          keyExtractor={item => item.Apellido}
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
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15
  },
  subhead: {
    fontSize: 25,
    marginLeft: 15,
    marginVertical: 5
  }
});

export default Example;