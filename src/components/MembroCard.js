// Arquivo: src/components/MembroCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BotaoAcao from './BotaoAcao';

// Componente Filho que exibe os dados de um membro da equipe e dispara ação para o Pai
export default function MembroCard({ nome, cargo, tecnologia, disponivel, onSelecionar }) {
  return (
    <View style={[styles.card, !disponivel && styles.cardIndisponivel]}>
      <View style={styles.linhaTopo}>
        <Text style={styles.nome}>{nome}</Text>
        <View style={[styles.badge, disponivel ? styles.badgeAtivo : styles.badgeOcupado]}>
          <Text style={styles.badgeTexto}>
            {disponivel ? 'Disponível' : 'Em Projeto'}
          </Text>
        </View>
      </View>

      <Text style={styles.cargo}>{cargo}</Text>
      <Text style={styles.tech}>Stack principal: {tecnologia}</Text>

      <BotaoAcao
        texto="Selecionar para Tarefa"
        corFundo={disponivel ? '#059669' : '#64748B'}
        onPress={onSelecionar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#059669',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  cardIndisponivel: {
    borderLeftColor: '#94A3B8',
    opacity: 0.85,
  },
  linhaTopo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeAtivo: {
    backgroundColor: '#D1FAE5',
  },
  badgeOcupado: {
    backgroundColor: '#E2E8F0',
  },
  badgeTexto: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  cargo: {
    fontSize: 14,
    color: '#475569',
    marginBottom: 4,
  },
  tech: {
    fontSize: 13,
    color: '#2563EB',
    fontWeight: '600',
  },
});