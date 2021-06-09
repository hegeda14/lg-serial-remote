# lg-serial-remote Cinnamon applet #
This small applet was intended to replace my IR remote control and the manual input switching while working with a multi-monitor/multi-PC setup.

## Requirements ##
- Clone this repository into ```~/.local/share/cinnamon/applets```
- Copy the provided udev rule ```10-ttyS.rules```, to provide access for the applet to the serial port. Modify it, according to your needs.
- Clone the ```libLGTV_serial``` repository into the applet's folder and configure it for your TV/monitor model. You can use either:
    - [suan/libLGTV_serial] https://github.com/suan/libLGTV_serial
    - [hegeda14/libLGTV_serial] https://github.com/hegeda14/libLGTV_serial (This has been extended with my TV/monitor model - M227WDP)

## Supported Operating Systems ##
- Linux with Cinnamon desktop environment

## Usage ##

- After configuration, just add the applet to your panel and enjoy!
   
![applet](https://github.com/hegeda14/lg-serial-remote/blob/master/applet_image.png?raw=true)

## TODO/Bugs/Contributions ##
- [Maybe-TODO] Replacing the external serial library with bash commands.
- [Bug] My LG model seems to be really sensitive for malformed or too frequent serial commands. This should be addressed in this applet somehow.  

## Credits ##
- [suan/libLGTV_serial] https://github.com/suan/libLGTV_serial