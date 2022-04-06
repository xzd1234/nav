import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'
import data from '../src/assets/data'
const mockArr = [
    {
        url: '/api/project/list',
        method: 'post',
        response: ({ body }) => {
            return {
                code: 0,
                message: 'ok',
                data: data,
            }
        },
    },
]
export function setupProdMockServer() {
    createProdMockServer(mockArr)
}