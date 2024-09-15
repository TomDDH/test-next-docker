import { NextResponse } from "next/server";
// import { BigQuery } from "@google-cloud/bigquery";


// const bigquery = new BigQuery(
//     {
//       projectId: 'test-app-edf74',
//     }
//   );

//   const bigqueryTable = "test-app-edf74.appTestData.app_test_data_table"



export async function GET(req, res) {
    // const bigquery = new BigQuery();
    // const query = `SELECT 1`;
    // const [datasets] = await bigquery.getDatasets({projectId: "my-test-project-361004"});
    // console.log('Datasets:');
    // datasets.forEach(dataset => console.log(dataset.id));

  //   const projectId = "test-app-edf74"

  // const options = {
  //     // Specify a job configuration to set optional job resource properties.
  //     configuration: {
  //       query: {
  //         query: `SELECT *
  //               FROM test-app-edf74.appTestData.app_test_data_table
  //               LIMIT 100`,
  //         useLegacySql: false,
  //       },
  //     },
  //   };

  //   const response = await bigquery.createJob(options);
  //   const job = response[0];
  //   // Wait for the query to finish
  //   const [rows] = await job.getQueryResults(job)
    // console.log(rows);


    const row  ={
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    }
    return NextResponse.json(row);

}