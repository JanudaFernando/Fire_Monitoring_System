const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com:1883');

client.on('connect', () => {
    client.subscribe('/alerts/homeowner');
    console.log('Homeowner Alert Running');
});

client.on('message', (topic, message) => {
    console.log('HOMEOWNER ALERT:', message.toString());
});
