
let response;

exports.lambdaHandler = async (event, context) => {
    console.log(event);
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Received a scheduled event from EventBridge Scheduler',
                event: event
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
