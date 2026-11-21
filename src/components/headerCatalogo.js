//estilo do contador 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderCatalogo({ titulo, subtitulo, totalInscritos }) {
  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.subtitulo}>{subtitulo}</Text>
      </View>

      <View style={styles.badge}>
        <Text style={styles.contador}>{totalInscritos}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E293B',
    padding: 20,
    paddingTop: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titulo: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#94A3B8',
    fontSize: 14,
    marginTop: 4,
  },

  badge: {
    backgroundColor: '#2563EB',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contador: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
