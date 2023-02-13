
let response;

exports.handler = async (event, context) => {
    console.log(event);
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Received an event from Step Functions',
                event: event
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
