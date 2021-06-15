One of the biggest reason for the popularity of React Native is that we can create a bridge between the Native language and JavaScript code. Which means we can reuse all the reusable libraries created in iOS and Android world.

## Description
This is an React Native Bridging POC where we have bridged the code between React Native and Android via a small peice of code written in java for doing summation and executing that java code in a React Native function on click of a button, the resulting sum is then shown in an alert box. 

<img src='./reactBriging.gif' alt='video' height='720' />

# Native Bridging

This is basically a simplest way of cross-component communication. So we need a way to pass properties both from native to React Native, and from React Native to native.
In this code we just import logics from NativeModules and create communication with the logic written to the native languages for Android and iOS.

# To Start App

Just clone app and run "npm install" and run the app
