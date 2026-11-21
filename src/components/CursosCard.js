
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CursoCard({ curso, matriculado, onToggleMatricula }) {
  return (
    <View style={[
      styles.card,
      matriculado && styles.cardMatriculado
    ]}>

      <Text style={styles.titulo}>{curso.titulo}</Text>

      <Text style={styles.categoria}>{curso.categoria}</Text>

      <Text style={styles.info}>Nível: {curso.nivel}</Text>

      <Text style={styles.info}>
        Carga horária: {curso.cargaHoraria} horas
      </Text>

      <Text style={styles.info}>Instrutor: {curso.instrutor}</Text>

      <Text style={styles.info}>
        Vagas disponíveis: {matriculado ? curso.vagas - 1 : curso.vagas}
      </Text>

      <Text style={styles.descricao}>{curso.descricao}</Text>

      <TouchableOpacity
        style={[
          styles.botao,
          matriculado && styles.botaoMatriculado
        ]}
        onPress={onToggleMatricula}
      >
        <Text style={styles.textoBotao}>
          {matriculado
            ? '✓ Matriculado (Toque para cancelar)'
            : 'Garantir Vaga'}
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E2E8F0',
  },

  cardMatriculado: {
    borderColor: '#10B981',
  },

  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },

  categoria: {
    color: '#2563EB',
    marginBottom: 8,
  },

  info: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },

  descricao: {
    color: '#64748B',
    marginTop: 8,
  },

  botao: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },

  botaoMatriculado: {
    backgroundColor: '#059669',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
