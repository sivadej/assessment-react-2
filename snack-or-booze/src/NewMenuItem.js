//TODO
//-form validation

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SimpleReactValidator, {autoForceUpdate} from 'simple-react-validator';
import SnackOrBoozeApi from './Api';
import { Button, Form, FormGroup, Input, Card, CardBody, CardTitle } from 'reactstrap';

const NewMenuItem = ({ category, title, reloadItems }) => {
  const validator = new SimpleReactValidator({autoForceUpdate});
  const history = useHistory();

  const [item, setItem] = useState({
    id: '',
    name: '',
    description: '',
    recipe: '',
    serve: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setItem(i =>({ ...i, [name]: value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (validator.allValid()) addItem(item);
    else validator.showMessages();
  };

  const addItem = async (item) => {
    console.log('adding item');
    console.log(item);
    let newItem = await SnackOrBoozeApi.addItem(item, category);
    reloadItems();
    console.log(`${newItem.id} added to menu!`);
    history.push(`/${category}`)
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
              name='id'
              value={item.id}
              onChange={handleChange}
              onBlur={() => validator.showMessageFor('id')}
              placeholder='Item ID'
            />
              {validator.message('id',item.id,'required|alpha_num_dash')}
            <Input
              type='text'
              name='name'
              value={item.name}
              onChange={handleChange}
              placeholder='Item Name'
            />
              {validator.message('name',item.name,'required')}
            <Input
              type='text'
              name='description'
              value={item.description}
              onChange={handleChange}
              placeholder='Description'
            />
            <Input
              type='textarea'
              name='recipe'
              value={item.recipe}
              onChange={handleChange}
              placeholder='Recipe'
            />
            <Input
              type='text'
              name='serve'
              value={item.serve}
              onChange={handleChange}
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
