module.exports.internalError = () => {
    return {
        body: JSON.stringify({
            error: 500,
            message: 'Internal Error'
        }),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        },
        statusCode: 500
    }
}

module.exports.ok = (body) => {
    return {
        body: JSON.stringify(body),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        },
        statusCode: 200
    }
}


module.exports.badRequest = (message) => {
    return {
        body: JSON.stringify({
            error: 400,
            message,
        }),
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
        },
        statusCode: 400,
    };

}