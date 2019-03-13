import React from "react";
import { CircularProgress, Button } from "@material-ui/core";
import { changeLoadingAction } from "../../actions/testActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const TestComponentRedux = ({ loading, changeLoadingAction }) => {
  return (
    <div>
      {loading ? <CircularProgress /> : null}
      <br />
      <Button
        onClick={() => {
          changeLoadingAction(true);
        }}
      >
        Mostra Loading
      </Button>
      <Button
        onClick={() => {
          changeLoadingAction(false);
        }}
      >
        Esconde Loading
      </Button>
    </div>
  );
};

const mapStateToProps = ({ test }) => ({ loading: test.loading });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeLoadingAction }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponentRedux);
