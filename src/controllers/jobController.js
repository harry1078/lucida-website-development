import { getApi, postApi, postQuery } from "../utils/http";

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

export async function applyJob(data) {
  if (data) {
    let url = `http://localhost:8000/api/v1/users/apply`;
    const applyResponse = await postApi(url, data)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    return applyResponse;
  } else {
    alert("Invalid Job ");
    return [];
  }
}

export async function applyQuery(data) {
  if (data) {
    let url = `http://localhost:8000/api/v1/users/register`;
    const applyResponse = await postQuery(url, data)
      .then((response) => {
        console.log('API resp',response);
        
        return response;
      })
      .catch((error) => {
        return error.response;
      });
    return applyResponse;
  } else {
    alert("Invalid Query");
    return [];
  }
}
