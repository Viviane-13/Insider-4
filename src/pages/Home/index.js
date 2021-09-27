import React from 'react';
import {View, Text} from 'react-native';

import {Container, SearchContainer, Input, SearchButton} from './styles';
import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Home() {
  return (
    <Container>
      <Header title="React Prime" />
      <SearchContainer>
        <Input placeholder="Ex Vingadores" placeholderTextColor="#ddd" />
        <SearchButton>
          <Icon name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>
    </Container>
  );
}
