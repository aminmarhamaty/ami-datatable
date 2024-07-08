import React from 'react'
import { DataTable } from '../src/DataTable';

import 'ami-datatable/dist/index.css';

const App = () => {
  return(
    <>
    <DataTable deleteButton={true} theme={"red"} data={[
        { name: "ali", family: "rezaei", retire: true, age: 18 },
        { name: "ali", family: "rezaei", retire: false, age: 15 },
        { name: "reza", family: "rezaei", retire: true, age: 14 },
        { name: "taghi", family: "rezaei", retire: false, age: 11 },
        { name: "ahmad", family: "rezaei", retire: false, age: 13 },
        { name: "ali", family: "rezaei", retire: true, age: 21 },
      ]} />

      <DataTable deleteButton={true} theme={"green"} columns={["first name", "last name", "age"]} data={[
        { name: "ali", family: "rezaei", age: 18 },
        { name: "ali", family: "rezaei", age: 15 },
        { name: "reza", family: "rezaei", age: 14 },
        { name: "taghi", family: "rezaei", age: 11 },
        { name: "ahmad", family: "rezaei", age: 13 },
        { name: "ali", family: "rezaei", age: 21 },
      ]} />

      <DataTable deleteButton={true} theme={"blue"} data={[
        { width: 3, length: 6 },
        { width: 4, length: 6 },
        { width: 2, length: 6 },
        { width: 3, length: 8 },
        { width: 3, length: 6 },
        { width: 3, length: 6 },
      ]} />
    </>
  )
  
 
}

export default App
