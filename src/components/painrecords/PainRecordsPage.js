import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as painRecordActions from '../../actions/painRecordActions';
import {bindActionCreators} from 'redux';
import PainRecordList from './PainRecordList';
import {browserHistory} from 'react-router';

class PainRecordsPage extends React.Component {
  //------- constructor ----------------------
  // initialises state
  // call bind functions

  constructor(props, context) {
    super(props, context);
    this.redirectToAddPainRecordPage = this.redirectToAddPainRecordPage.bind(this);
  }

  //--------------- child functions called by render-----------------

  painRecordRow(painRecord, index) {
    return <div key={index}>{painRecord.title}</div>;
  }

  //---------- render function calling child components

  redirectToAddPainRecordPage() {
    browserHistory.push('/painrecord');
  }

  render() {
    const {painRecords} = this.props;
    return (
      <div>
        <h1>Submitted Pain Records</h1>
        <input type="submit"
               value="New Pain Record"
               className="btn btn-primary"
               onClick={this.redirectToAddPainRecordPage} />
        <PainRecordList painRecords={painRecords} />
      </div>
    );
  }
}

//------- PropTypes that provides propType validations ---------

PainRecordsPage.propTypes = {
  painRecords: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// ------------ redux connect and related functions --------------

function mapStateToProps(state){
  return {
    painRecords: state.painRecords
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(painRecordActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PainRecordsPage);
