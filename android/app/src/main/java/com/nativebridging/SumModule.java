package com.nativebridging;

import android.content.Context;
import android.content.Intent;
import android.os.Build;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.ArrayList;
import java.util.Arrays;

public class SumModule extends ReactContextBaseJavaModule {

    private Context context;

    //constructor
    public SumModule(Context context, ReactApplicationContext reactContext) {
        super(reactContext);
        this.context = context;
    }

    //Mandatory function getName that specifies the module name
    @Override
    public String getName() {
        return "Sum";
    }


    public long main()
    {
      long sum = 0;
      for (int i = 0; i < 1000; i++) {
        for (int j = 0; j < 1000; j++) {
          for (int k = 0; k < 1000; k++) {
            sum = sum + i + j + k;
          }
        }
      }

    return sum;

    }

    //Custom function that we are going to export to JS
    @ReactMethod
    public void sumOfValue(Callback cb) {
        long sum = main();
        try {
            cb.invoke(null, String.valueOf(sum));
        } catch (Exception e) {
            cb.invoke(e.toString(), null);
        }
    }


}