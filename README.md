# sqs-demo

Contains a nodejs example for basic message exchange.

## Demo 1

```
aws --endpoint="http://localhost:4566" sqs create-queue --queue-name=test_queue
```

to run: start poller component (second)
```
node second-component.js
```

send message from first component
```
node first-component.js "lorem ipsum blablabla"
```

## Demo 2

```
aws --endpoint="http://localhost:4566" sqs create-queue --queue-name=test_queue
```

```
aws --endpoint="http://localhost:4566" sqs create-queue --queue-name=another_test_queue
```

```
aws --endpoint="http://localhost:4566" sns create-topic --name=test_topic
```

```
aws --endpoint="http://localhost:4566" sns subscribe --topic-arn=arn:aws:sns:us-east-1:000000000000:test_topic --protocol=sqs --notification-endpoint=http://localhost:4566/000000000000/test_queue
&&
aws --endpoint="http://localhost:4566" sns subscribe --topic-arn=arn:aws:sns:us-east-1:000000000000:test_topic --protocol=sqs --notification-endpoint=http://localhost:4566/000000000000/another_test_queue
```

to run: start poller components (second and third)
```
node second-component.js
```

```
node third-component.js
```

send message from first component
```
node first-component.js "lorem ipsum blablabla"
```