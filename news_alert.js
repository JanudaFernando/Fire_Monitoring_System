const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com:1883');

client.on('connect', () => {
    client.subscribe('/alerts/news', (err) => {
        if (!err) {
            console.log('Subscribed to News alerts');
        } else {
            console.error('Subscription error:', err);
        }
    });
});

client.on('message', (topic, message) => {
    console.log(`NEWS ALERT ${message.toString()}`);
});
