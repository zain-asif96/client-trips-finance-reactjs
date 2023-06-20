import React from 'react';

import { TableRow, TableData } from './TableStyle';

const Table: React.FC = (props: any) => (
  <TableRow>
    <TableData>{props.sender}</TableData>
    <TableData>{props.message}</TableData>
    <TableData>{props.status}</TableData>
  </TableRow>
);

export default Table;
