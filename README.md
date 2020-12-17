RPi3 Pulse Graph
================

Web app to display heartbeats in a ECG-like graph.

### Hardware Setup

Connect the Pulse Sensor to the RPi3:

 - `G` to `GROUND`
 - `V` to `3.3V`
 - `S` to `A0` of the `ADS1115` chip

Connect the ADS1115 chip to the RPi3:

 - `G` to `GROUND`
 - `V` to `3.3V`
 - `SDA` to the `SDA` pin
 - `SLC` to the `SLC` pin

You can check the connection by installing the `i2c-tools` package:

```sh
sudo apt-get install -y i2c-tools
sudo i2cdetect -y 1
```

You should see the channel number where the heart pulse data will come, like below:

```sh
$ sudo i2cdetect -y 1
     0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f              
00:          -- -- -- -- -- -- -- -- -- -- -- -- --              
10: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --              
20: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --              
30: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --              
40: -- -- -- -- -- -- -- -- 48 -- -- -- -- -- -- --              
50: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --              
60: -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --              
70: -- -- -- -- -- -- -- --                                      
```

### Software Setup

```sh
# Install Python3 and Pip
sudo apt install python3-pip

# Install the ADS1x15 driver
sudo pip3 install adafruit-circuitpython-ads1x15
```
