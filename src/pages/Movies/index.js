import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../components/Header';
import {Container} from './styles';

export default function Movies() {
  return (
    <Container>
      <Header title="Minha lista" />
    </Container>
  );
}
