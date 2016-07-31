import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PainRecordRow = ({painRecord }) => {
  return (
    <tr>
      <td><a href={painRecord.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/painrecord/' +  painRecord.id}>{painRecord.title}</Link></td>
      <td>22 of june</td>
      <td>{painRecord.authorId}</td>
      <td>{painRecord.category}</td>
      <td>{painRecord.length}</td>
    </tr>
  );
};

PainRecordRow.propTypes = {
  painRecord: PropTypes.object.isRequired
};

export default PainRecordRow;
