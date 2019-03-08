// src/components/FormInputTable.js

import React from 'react'

import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead
} from '@material-ui/core'

export const FormInputTable = ({ formInputs }) => {
  return (
    <div>
      <hr />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell>Input Field</TableCell>
            <TableCell>Validated Input</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formInputs.map((formInput, index) => (
            <TableRow key={`form-${index}`}>
              <TableCell>{index}</TableCell>
              <TableCell>{formInput.name}</TableCell>
              <TableCell>{formInput.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
