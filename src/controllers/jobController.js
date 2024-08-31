import { getApi } from "../utils/http";



export async function getJobsList(params) {
  let url = "https://lucidatechnologies-team.freshteam.com/api/job_postings";

  const jobList = await getApi(url, params)
    .then((response) => {
      if (response?.data?.length) {
        return response.data;
      }
    })
    .catch((error) => {
      return [];
    });
  return jobList;
}

// export async function getSingleJob(id) {
//   if (id) {
//     let url = `https://lucidatechnologies-team.freshteam.com/api/job_postings/${id}`;
//     const singleJobDetails = await getApi(url)
//       .then((response) => {
//         return response.data;
//       })
//       .catch((error) => {
//         return error.response;
//       });
//     return singleJobDetails;
//   } else {
//     alert("Invalid Job Id");
//     return {};
//   }
// }


