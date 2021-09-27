import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, MenuButton, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Header({title}) {
  const navigation = useNavigation();

  return (
    <Container>
      <MenuButton onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={36} color="#FFF" />
      </MenuButton>
      <Title>{title}</Title>
    </Container>
  );
}
