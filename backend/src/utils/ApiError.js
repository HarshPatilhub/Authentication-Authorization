class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something Went Wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode,
        this.message = message,
        this.errors = errors,
        this.success = false,
        this.data = null
    }
}

export default ApiError;