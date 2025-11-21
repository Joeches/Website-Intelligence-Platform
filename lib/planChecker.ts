import { apiGet } from './api';


export async function getUserPlan() {
return await apiGet('/billing/plan');
}
