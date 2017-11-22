import React from 'react';
import PropTypes from 'prop-types';
import  {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  FormGroup,
  FormText,
  Label,
  Input,
  Navbar,
  NavbarBrand,
} from 'reactstrap';

export default class MedFileRequest extends React.Component {
  render() {
    return (
      <div>
        <Navbar dark color='primary' expand='md' >
          <NavbarBrand href='/'>MyMedFile</NavbarBrand>
        </Navbar>
        <Container className='main'>
          <Row>
            <Col xs={12} md={{ size: 6, offset: 3}}>
              <Card>
                <CardBody>
                  <pre>id: {this.props.match.params.id}</pre>
                  <FormGroup>
                    <Input type='file' name='file' id='exampleFile' />
                    <FormText color='muted'>
                      Lorem ipsum dolorum.
                    </FormText>
                  </FormGroup>
                  <Button color='primary'>Upload</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
