// Arquivo: src/components/BotaoAcao.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Componente de botão customizável via Props (texto, corFundo e função onPress)
export default function BotaoAcao({ texto, corFundo = '#2563EB', onPress }) {
  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: corFundo }]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});