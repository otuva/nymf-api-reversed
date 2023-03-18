"use strict";

const hashHelper = "com.nymf.android.util.text.HashHelper";
const mainActivity = "com.nymf.android.MainActivity";

Java.perform(function x() {
    console.log("Inside java perform function");

    // enumarate all loaded classes
    Java.enumerateLoadedClasses({
        onMatch: function(className) {
            if (className.indexOf("com.nymf.android") != -1) {
                console.log(className);
            }
        },
        
        onComplete: function() {}
    });

    // hooking the hash function
    const hashHelperClass = Java.use(hashHelper);
    const Activity = Java.use('android.app.Activity');
    const Exception = Java.use('java.lang.Exception');
    Activity.onResume.implementation = function () {
        // const hashInstance = hashHelperClass.$new();
        console.log(`Secret: ${hashHelperClass.secretFromJNI()}`);
        // continue with original implementation
        this.onResume();
    };

    
})

// if (Java.available) {
    
// }


/* 
// const myClass = Java.use(hashHelper);

    // create instance of the class
    // const myClassInstance = myClass.$new();

    // console.log(`myClassInstance: ${myClassInstance}`);
    // console.log(`Result of secret function: ${myClassInstance.secretFromJNI()}`);

    //Find an instance of the class and call "secret" function.
    // Java.choose(hashHelper, {
    //     onMatch: function (instance) {
    //         console.log(`Found instance: ${instance}`);
    //         console.log(`Result of secret func: ${instance.secretFromJNI()}`);
    //     },

    //     onComplete: function () {
    //         console.log("Done");
    //     }
    // });

    // Find an instance of the class
    Java.choose(mainActivity, {
        onMatch: function (instance) {
            console.log(`Found instance: ${instance}`);
            // console.log(`Result of secret func: ${instance.secretFromJNI()}`);
        },

        onComplete: function () {
            console.log("Done");
        }
    });
*/
