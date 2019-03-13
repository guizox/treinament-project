import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addAction } from "../../actions/testActions";

const TodoComponentRedux = ({ todos, addAction }) => {
  const [value, setValue] = useState("");
  return (
    <div>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input onChange={ev => setValue(ev.target.value)} value={value} />
      <button onClick={() => addAction(value)}>Adicionar Todo</button>
    </div>
  );
};

const mapStateToProps = ({ test }) => ({ todos: test.todos });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addAction }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoComponentRedux);
