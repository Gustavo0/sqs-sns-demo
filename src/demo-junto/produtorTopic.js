const AWS = require('aws-sdk');
const topicArn = 'arn:aws:sns:us-east-2:000000000000:test_topic';

const sendMessage = async (messageBody = 'empty') => {
    const sns = new AWS.SNS({region: 'us-east-2', endpoint: 'http://localhost:4566'});
    const a = await sns.publish({
        TopicArn: topicArn,
        Message: messageBody
    }).promise();
};

sendMessage(process.argv[2]);