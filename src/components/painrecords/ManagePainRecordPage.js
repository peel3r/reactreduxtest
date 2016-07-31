import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as painRecordActions from '../../actions/painRecordActions';
import PainRecordForm from './PainRecordForm';
import toastr from 'toastr';


export class ManagePainRecordPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      painRecord: Object.assign({}, props.painRecord),
      errors: {},
      saving: false
    };
    this.updatePainRecordState = this.updatePainRecordState.bind(this);
    this.savePainRecord = this.savePainRecord.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.painRecord.id != nextProps.painRecord.id) {
      this.setState({painRecord: Object.assign({}, nextProps.painRecord)});
    }
  }

  updatePainRecordState(event) {
    const field = event.target.name;
    let painRecord = this.state.painRecord;
    painRecord[field] = event.target.value;
    return this.setState({painRecord: painRecord});
  }

  savePainRecord(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.savePainRecord(this.state.painRecord)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});

      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Record saved')
    this.context.router.push('/painrecords');
  }
  render() {
    return (
        <PainRecordForm
          allAuthors={this.props.authors}
          onChange={this.updatePainRecordState}
          onSave={this.savePainRecord}
          painRecord={this.state.painRecord}
          errors={this.state.errors}
          saving={this.state.saving}
        />
    );
  }
}

ManagePainRecordPage.propTypes = {
  painRecord: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManagePainRecordPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function getPainRecordById(painRecords, id) {
  const painRecord = painRecords.filter(painRecord => painRecord.id == id);
  if(painRecord ) return painRecord[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const painRecordId = ownProps.params.id;
  let painRecord = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if(painRecordId && state.painRecords.length > 0) {
    painRecord = getPainRecordById(state.painRecords, painRecordId);
  }

  const authorFormattedForDropdown = state.authors.map(author => {

    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  console.log(authorFormattedForDropdown);

  return {
    painRecord: painRecord,
    authors: authorFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(painRecordActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagePainRecordPage);
