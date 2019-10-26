const Stream = require('./node-rtsp-stream');
// const streamUrl = process.env.FOSCAM_STREAM_URL;
const url1 = "rtsp://www.midiat.net:37779/cam/realmonitor?channel=1&subtype=00&authbasic=cm9vdDpjYW1hcm9uMQ==";
const url2 = "rtsp://www.midiat.net:37779/cam/realmonitor?channel=2&subtype=00&authbasic=cm9vdDpjYW1hcm9uMQ==";
const url3 = "rtsp://www.midiat.net:37779/cam/realmonitor?channel=3&subtype=00&authbasic=cm9vdDpjYW1hcm9uMQ==";
const url4 = "rtsp://www.midiat.net:37779/cam/realmonitor?channel=4&subtype=00&authbasic=cm9vdDpjYW1hcm9uMQ==";
const url5 = "rtsp://www.midiat.net:37779/cam/realmonitor?channel=5&subtype=00&authbasic=cm9vdDpjYW1hcm9uMQ==";
const url6 = "rtsp://www.midiat.net:37779/cam/realmonitor?channel=6&subtype=00&authbasic=cm9vdDpjYW1hcm9uMQ==";
const url7 = "rtsp://www.midiat.net:37779/cam/realmonitor?channel=7&subtype=00&authbasic=cm9vdDpjYW1hcm9uMQ==";

stream = new Stream({
    name: 'centromag-stream',
    streamUrl: url1,
    wsPort: 9001
});

stream = new Stream({
    name: 'centromag-stream',
    streamUrl: url2,
    wsPort: 9002
});

stream = new Stream({
    name: 'centromag-stream',
    streamUrl: url3,
    wsPort: 9003
});

stream = new Stream({
    name: 'centromag-stream',
    streamUrl: url4,
    wsPort: 9004
});
stream = new Stream({
    name: 'centromag-stream',
    streamUrl: url5,
    wsPort: 9005
});
stream = new Stream({
    name: 'centromag-stream',
    streamUrl: url6,
    wsPort: 9006
});
stream = new Stream({
    name: 'centromag-stream',
    streamUrl: url7,
    wsPort: 9007
});
// for (i = 0; i == 2; i++) {
//     var url = "rtsp://www.midiat.net:37779/cam/realmonitor?channel=" + (i + 1) + "&subtype=00&authbasic=cm9vdDpjYW1hcm9uMQ==";
//     var port = "900" + (i + 1);
//     stream = new Stream({
//         name: 'centromag-stream',
//         streamUrl: url,
//         wsPort: port
//     });
// }