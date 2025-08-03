const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com:1883');

client.on('connect', () => {
    setInterval(() => {
        const value = Math.floor(Math.random() * 100);
        client.publish('/forest/fire1', value.toString());
        console.log('Fire1:', value);
    }, 1000);
});
