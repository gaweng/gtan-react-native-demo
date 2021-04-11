import * as React from 'react';
import { Body, Button, Card, CardItem, Container, Content, Footer, FooterTab, Form, Header, Icon, Input, Item, Label, Left, Right, Text, Title } from 'native-base';

export default function App() {
  return (
    <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem header>
              <Text>Card</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Das ist eine Beispielkarte
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Footer</Text>
            </CardItem>
          </Card>
          <Form>
            <Item inlineLabel>
                <Label>Username</Label>
                <Input />
            </Item>
            <Item inlineLabel last>
                <Label>Password</Label>
                <Input />
            </Item>
          </Form>
          <Button bordered dark>
            <Text>Button</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>

  );
}