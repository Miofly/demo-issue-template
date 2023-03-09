import axios from 'axios';

axios.interceptors.response.use((res: any) => {
  return res.data;
});

export async function fetchRepoList(url: string) {
  return await axios.get('https://gitee.com/api/v5/repos/miofly/apps-template/branches');
}
