const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com:1883');

client.on('connect', () => {
    client.subscribe('/alerts/social', (err) => {
        if (!err) {
            console.log('Subscribed to Social Media alerts');
        } else {
            console.error('Subscription error:', err);
        }
    });
});

client.on('message', (topic, message) => {
    console.log(`SOCIAL MEDIA ALERT ${message.toString()}`);
});
