import  React, {PropTypes} from 'react';
import PainRecordRow from './PainRecordRow';

const PainRecordList = ({painRecords}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Date</th>
        <th>Pain</th>
        <th>Mood</th>
        <th>Overall feeling</th>
      </tr>
      </thead>
      <tbody>
      {painRecords.map(painRecord =>
        <PainRecordRow key={painRecord.id} painRecord={painRecord} />
      )}
      </tbody>
    </table>
  );
};
PainRecordList.propTypes = {
  painRecords: PropTypes.array.isRequired
};
export default PainRecordList;
