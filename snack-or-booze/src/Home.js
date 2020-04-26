import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({items}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <h4>Browse our incredibly vast selection of {items.drinks.length} drinks and {items.snacks.length} snacks.</h4>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
