import { Organization } from "src/pages/Main";

import api from "./axios";

const GetOrganizations = async ({ name }: { name: string }) => {
  const response = await api.get<Organization[]>(`?name=${name}`);

  return response.data;
};

export default GetOrganizations;
