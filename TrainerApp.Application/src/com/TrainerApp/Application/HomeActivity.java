package com.TrainerApp.Application;

import android.os.Bundle;
import org.apache.cordova.DroidGap;

public class HomeActivity extends DroidGap {
    /**
     * Called when the activity is first created.
     */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
        this.appView.getSettings().setUseWideViewPort(true);
        this.appView.getSettings().setLoadWithOverviewMode(true);
        //this.appView.setInitialScale(0);
    }
}
