var SerialPort = require("browser-serialport").SerialPort

serialPort.list((err, ports) => {
    if (err) return;
    ports.forEach(function(port) {
      console.log(port.comName);
      console.log(port.pnpId);
      console.log(port.manufacturer);
    });
  });