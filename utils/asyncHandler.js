const asyncHandler = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            console.log("asyncHandler error: ", error);
            
        }
    }
    
}

export {asyncHandler};