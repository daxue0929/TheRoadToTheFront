import request from "@/utils/request"

interface HelloReq {
    username: string,
    password: string
}

interface HelloResp {
    token: string
}

export function login(req: HelloReq): Promise<HelloResp> {
    return request.get<HelloResp, HelloResp>(`/hello/test?username=${req.username}&password=${req.password}`);
}
