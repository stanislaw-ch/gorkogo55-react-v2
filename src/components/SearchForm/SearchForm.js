import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const searchForm = props => {
  // 
  // TODO: Отобразить данные о магазинах
  //
  const testData = [
    {
      number: 1,
      title: 'цветы',
      description: null,
      keywords: 'букет, розы, ромашки',
      phone: '12345678',
      vk: null,
      instagram: "rose12345",
    },
    {
      number: 216,
      title: 'скупка и ремонт техники',
      description: null,
      keywords: null,
      phone: '697966',
      vk: null,
      instagram: '@vadimcpp',
    },
    {
      number: 40,
      title: 'nextek',
      description: 'комьютерная техника',
      keywords: 'нотбук, монитор, принтер',
      phone: null,
      vk: 'vadimcpp',
      instagram: null,
    },
    
  ];  

  const { onSearchForm } = props;

  return (
    <Container>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Что найти?"
          />
        </Col>
        <Col md="auto">
          <Button
            variant="primary"
            onClick={ () => onSearchForm() }
          >
            Найти
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default searchForm;
