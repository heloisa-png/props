
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

// Importando os dados
import { CATEGORIAS, LISTA_CURSOS } from './src/data/cursos';

// Importando os componentes
import HeaderCatalogo from './src/components/headerCatalogo';
import FiltroCategoria from './src/components/FiltroCategoria';
import CursoCard from './src/components/CursosCard.js';

export default function App() {

  // Estado da categoria selecionada
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  // guarda os IDs dos cursos matriculados
  const [idsMatriculados, setIdsMatriculados] = useState([]);

  // filtra cursos pela categoria
//usando operador ternario
  const cursosFiltrados = categoriaAtiva === 'Todos'
    ? LISTA_CURSOS
    : LISTA_CURSOS.filter(
        (curso) => curso.categoria === categoriaAtiva
      );

  // Função para realizar ou cancelar matrícula
  function alternarMatricula(id) {

    if (idsMatriculados.includes(id)) {

      // Remove a matrícula
      setIdsMatriculados(
        idsMatriculados.filter((item) => item !== id)
      );

    } else {

      // Adiciona a matrícula
      setIdsMatriculados([...idsMatriculados, id]);

    }
  }

  return (
    <View style={styles.tela}>

      <FlatList
        data={cursosFiltrados}
        keyExtractor={(item) => item.id}

        ListHeaderComponent={
          <View>
            <HeaderCatalogo
              titulo="Catálogo de Cursos"
              subtitulo="Encontre seu próximo aprendizado"
              totalInscritos={idsMatriculados.length}
            />

            <FiltroCategoria
              categorias={CATEGORIAS}
              ativa={categoriaAtiva}
              aoSelecionar={setCategoriaAtiva}
            />
          </View>
        }

        renderItem={({ item }) => (
          <CursoCard
            curso={item}
            matriculado={idsMatriculados.includes(item.id)}
            onToggleMatricula={() => alternarMatricula(item.id)}
          />
        )}

        contentContainerStyle={styles.lista}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },

  lista: {
    paddingBottom: 20,
  },
});
