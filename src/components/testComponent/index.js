import React, { useState } from "react";
import { CircularProgress, Button } from "@material-ui/core";

const TestComponent = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading ? <CircularProgress /> : null}
      <br />
      <Button
        onClick={() => {
          setLoading(true);
        }}
      >
        Mostra Loading
      </Button>
      <Button
        onClick={() => {
          setLoading(false);
        }}
      >
        Esconde Loading
      </Button>
    </div>
  );
};

export default TestComponent;
