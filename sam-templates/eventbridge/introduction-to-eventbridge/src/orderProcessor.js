
let response;

exports.processOrder = async (event, context) => {
    console.log(event);
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Received an event(order) from EventBridge, processing ...',
                event: event
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
