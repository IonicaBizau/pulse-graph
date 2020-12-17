# extended from https://github.com/WorldFamousElectronics/PulseSensor_Amped_Arduino

import time
import threading
import board
import busio
import sys


i2c = busio.I2C(board.SCL, board.SDA)

import adafruit_ads1x15.ads1015 as ADS
from adafruit_ads1x15.analog_in import AnalogIn

ads = ADS.ADS1015(i2c)
chan = AnalogIn(ads, ADS.P0)

while True:
    sys.stdout.flush()
    print(chan.value, chan.voltage)
    #time.sleep(0.005)
    time.sleep(0.0005)
