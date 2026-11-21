
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function FiltroCategoria({ categorias, ativa, aoSelecionar }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categorias.map((categoria) => (
          <TouchableOpacity
            key={categoria}
            style={[
              styles.botao,
              ativa === categoria && styles.botaoAtivo
            ]}
            onPress={() => aoSelecionar(categoria)}
          >
            <Text
              style={[
                styles.texto,
                ativa === categoria && styles.textoAtivo
              ]}
            >
              {categoria}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    gap: 8,
  },

  botao: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#E2E8F0',
  },

  botaoAtivo: {
    backgroundColor: '#2563EB',
  },

  texto: {
    color: '#1E293B',
    fontWeight: '500',
  },

  textoAtivo: {
    color: '#FFFFFF',
  },
});
