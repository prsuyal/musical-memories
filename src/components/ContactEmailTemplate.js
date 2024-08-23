import React from 'react';
import { Html, Head, Body, Heading, Text, Container } from '@react-email/components';

const ContactEmailTemplate = ({ name, email, message, purpose }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact from Musical Memories</Heading>
        <Text style={text}>
          <strong>Name:</strong> {name}
        </Text>
        <Text style={text}>
          <strong>Email:</strong> {email}
        </Text>
        <Text style={text}>
          <strong>Purpose:</strong> {purpose}
        </Text>
        <Text style={text}>
          <strong>Message:</strong>
        </Text>
        <Text style={text}>{message}</Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmailTemplate;

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  padding: '17px 0 0',
  margin: '0',
};

const text = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '24px',
};