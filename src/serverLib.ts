export const okay = (data: any) => {
    let response = {
        error: null,
        result: data,
    }
    
    return new Response(JSON.stringify(response), {status: 200});
}

export const fail = (error: any, data?: any) => {
    let response = {
        error: error,
        result: data,
    }

    return new Response(JSON.stringify(response), {status: 500});
}
