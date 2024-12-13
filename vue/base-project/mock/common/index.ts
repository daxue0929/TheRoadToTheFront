class Result<T> {
    code: number
    message: string
    data: T

    constructor(code: number, message: string, data: T) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
}

function createResult<T>(code: number, message: string, data: T): Result<T> {
    return new Result<T>(code, message, data);
}

export {Result, createResult}