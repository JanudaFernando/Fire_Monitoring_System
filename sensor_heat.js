const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com:1883');

client.on('connect', () => {
    setInterval(() => {
        const value = Math.floor(Math.random() * 100);
        client.publish('/forest/heat', value.toString());
        console.log('Heat:', value);
    }, 1000);
});
