//TODO
//-form validation

import React, { useState } from 'react';
import SimpleReactValidator, {autoForceUpdate} from 'simple-react-validator';
import SnackOrBoozeApi from './Api';
import { Button, Form, FormGroup, Input, Card, CardBody, CardTitle } from 'reactstrap';

const NewMenuItem = ({ category, title, reload }) => {
  const validator = new SimpleReactValidator({autoForceUpdate});

  const [item, setItem] = useState({
    id: '',
    name: '',
    description: '',
    recipe: '',
    serve: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.allValid()) addItem(item);
    else validator.showMessages();
  };

  const addItem = async (item) => {
    console.log('adding item');
    console.log(item);
    let newItem = await SnackOrBoozeApi.addItem(item, category);
    reload();
    console.log(`${newItem.id} added to menu!`);
    //redirect user to ?
  };

  return (
    <section className="col-md-4">
    <Card>
      <CardBody>
        <CardTitle>Add a New {title}</CardTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type='text'
              value={item.id}
              onChange={(e) => setItem({ ...item, id: e.target.value })}
              onBlur={() => validator.showMessageFor('id')}
              placeholder='Item ID'
            />
              {validator.message('id',item.id,'required|alpha_num_dash')}
            <Input
              type='text'
              value={item.name}
              onChange={(e) => setItem({ ...item, name: e.target.value })}
              placeholder='Item Name'
            />
              {validator.message('name',item.name,'required')}
            <Input
              type='text'
              value={item.description}
              onChange={(e) =>
                setItem({ ...item, description: e.target.value })
              }
              placeholder='Description'
            />
            <Input
              type='textarea'
              value={item.recipe}
              onChange={(e) => setItem({ ...item, recipe: e.target.value })}
              placeholder='Recipe'
            />
            <Input
              type='text'
              value={item.serve}
              onChange={(e) => setItem({ ...item, serve: e.target.value })}
              placeholder='Serving Instructions'
            />
            <Button>submit</Button>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
    </section>
  );
};

export default NewMenuItem;
