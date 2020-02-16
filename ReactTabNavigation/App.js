/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  View,
} from 'native-base';
import Anatomy from './src/components/Anatomy';
import Accordion from './src/components/Accordion';
import AccordionDefault from './src/components/AccordionDefault';
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'gray'}}>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title style={{textAlign: 'center'}}>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View>
            <Accordion />
          </View>
          <View>
            <AccordionDefault />
          </View>
        </Content>
        <Anatomy />
      </Container>
    );
  }
}
