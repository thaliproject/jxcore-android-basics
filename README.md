### Thali PouchDB Perf Test Version
This project uses Intellij 14.0.3. It should also run just fine in the latest release of Android Studio.

In order to run this project you must have installed:

* Node.js 0.10.x
* A reasonably modern JDK (I think, IntelliJ might actually handle this)
* Git

The build infrastructure in Intellij depends on Gradle and execing command lines so all the previous packages need to be configured in the system path so they will be available from the command line during builds.

In order to build please open the jxcore-droid project in Intellij/Android Studio and select the Run->Run jxcore-droid task. This task is connected to a gradle task that will set up the environment correctly.

Note that if you are using Eclipse then before you can build the project you need to jump over to your command line, navigate to the jxcore-droid directory and on the command line run 'gradlew replaceIndexJs'. Then do everything else as normal.

### JXcore / Node.JS for Android sample

This project is a kind of 'hello world' for JXcore's native interface on an Android application. 
It's an Eclipse IDE project. You also need Android-NDK is installed on your system.

The sample project use JXcore SpiderMonkey JIT build for Android ARM and Intel processors.  
Prebuilt JXcore binaries are already available under 'jxcore-droid/jxcore-binaries'

### Before Start
[How to setup Android NDK for Eclipse IDE](http://tools.android.com/recent/usingthendkplugin)  
[Download Android NDK](https://developer.android.com/tools/sdk/ndk/index.html)  
[Eclipse Android Plugin](http://developer.android.com/tools/sdk/eclipse-adt.html)

### Tips
Open Eclipse IDE and from the 'Project Explorer', Right Click->New->Other  
Android->Android Project from Existing Code  
Pick 'jxcore-droid' folder and move forward.

Do exactly the same with 'android-support-v7....' folder.

After all, you should have two eclipse projects on 'Project Explorer'. 
One of them is an Android support project. The other one is JXcore sample
project. Make sure you have both of them on Eclipse. 

Right click to 'jxcore-droid' project -> Android Tools -> Add Support Library .. and follow the steps.

If you have errors etc. (from top menu) Project -> Clean -> (Select both of the projects)

Right click to 'android-support-v7...' project and 'Build'. 

You may need to update some project settings for your environment. Feel free to ask from Github!