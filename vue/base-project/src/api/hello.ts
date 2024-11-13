import request from "@/utils/request"

interface HelloReq {

}

interface HelloResp {
    id: number
    name: string
}

export function hello(req: HelloReq): Promise<HelloResp> {
    return request.get<HelloResp, HelloResp>(`/hello/test`);
}
