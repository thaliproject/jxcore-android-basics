### Thali PouchDB Perf Test Version
This project uses Intellij 14.0.3. It should also run just fine in the latest release of Android Studio.

In order to run this project you must have installed:

* Node.js 0.10.x
* A reasonably modern JDK (I think, IntelliJ might actually handle this)
* Git
* Latest Android NDK

Now go to the command line and go to jxcore-droid and run 'gradlew replaceIndexJs'. This will install a bunch of node.js related stuff that is needed to run the perf tests.

Next you need to setup the Javascript runtime you want to use. By default the code is designed to run SpiderMonkey. To make that work you need to go to the command line, again to jxcore-droid and then run [path to your Android NDK]/ndk-build. See below if you want to use v8 instead of SpiderMonkey.

Now open jxcore-droid.iml in AndroidStudio/Intellij and hit Run.

### How do I run the perf tests using v8?
1. Clone the [JXCore depot](https://github.com/jxcore/jxcore) and follow the build instructions for Android using v8 (make sure to use the v8 build script).
2. Go to jxcore-droid/jni/Android.mk and uncomment out JXCORE_OUT_ANDROID and change the path to your equivalent path for the JXCore build you just did. Make sure to comment out the second JXCORE_OUT_ANDROID. Then scroll down and comment out the section on libmozjs and uncomment the sections on libv8base and libv8nosnapshot. Finally scroll to the bottom and comment out the first LOCAL_WHOLE_STATIC_LIBRARIES and uncomment the second.
3. Now run ndk-build as described above and continue.

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