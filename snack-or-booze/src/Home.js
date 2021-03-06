import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({itemCounts}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            {itemCounts
            ? <h4>Browse our incredibly vast selection of {itemCounts.drinks} drinks and {itemCounts.snacks} snacks.</h4>
            : <h4>Browse our vast selection of menu items.</h4>
            }
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;