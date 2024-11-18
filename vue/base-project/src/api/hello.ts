import request from "@/utils/request"
interface HelloResp {
    id: number
    name: string
}

export function hello(): Promise<HelloResp> {
    return request.get<HelloResp, HelloResp>(`/hello/test`);
}
