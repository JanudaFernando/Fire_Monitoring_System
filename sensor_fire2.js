const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com:1883');

client.on('connect', () => {
    setInterval(() => {
        const value = Math.floor(Math.random() * 100);
        client.publish('/forest/fire2', value.toString());
        console.log('Fire2:', value);
    }, 1000);
});
