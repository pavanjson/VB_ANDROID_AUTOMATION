# VB_ANDROID_AUTOMATION

# this testing requires the appium server which can be installed via powershell using npm

npm install -g appium

# then run this command for webdriverio in the directory of the projection in new terminal

npm install --save webdriverio @wdio/cli

 # go to the wdio.conf.js file and make the changes to the absolute path of the apk ie to "app" parameter
 
 # also change the platform verion of the device of your's in my case it was 9
 
 # install android studio and set the ANDROID_HOME Environment variable 
 # add adb to the path i.e is present in sdk
 
 # check the adb devices by runing the command in command prompt
 
 adb devices
 
 # copy the adb device name and do change the device name in the wdio.conf.js file.

# then open new terminal to run appium server by running below command

 appium --base-path /wd/hub
 
 # now open another terminal and run the following to execute the test
 
  npx wdio ./wdio.conf.js

