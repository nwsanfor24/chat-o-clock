import React from "react";
import ReactDOM from "react-dom";
import { Container } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import "./index.css";

const App = () => {
  <Container>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt eveniet
      consectetur vel fuga, dolore placeat? Ex impedit odio corporis qui!
    </p>
    <h1>Chat!</h1>
    <div>Chat window here</div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatibus
      vel possimus molestiae voluptate sit saepe minus. Cumque, molestias
      ratione.
    </p>
  </Container>;
};

ReactDOM.render(<App />, document.getElementById("app"));
