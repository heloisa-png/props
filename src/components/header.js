// Arquivo: src/components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente reutilizável de Cabeçalho que recebe 'titulo' e 'subtitulo' 
export default function Header({ titulo, subtitulo }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      {subtitulo ? <Text style={styles.subtitulo}>{subtitulo}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E293B',
    paddingTop: 48,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  subtitulo: {
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 4,
  },
});