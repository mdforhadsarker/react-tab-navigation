import React, {Component} from 'react';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon,
} from 'native-base';
export default class FooterExample extends Component {
  render() {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="beer" />
              <Text>Search</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button>
              <Icon name="star" />
              <Text>Favourite</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
