package com.appbasicpackage;

import android.app.ProgressDialog;
import android.content.DialogInterface;
import android.support.v7.app.AlertDialog;
import android.util.SparseArray;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * dialog 模块
 * Created by shizhang.cai on 2017/10/30.
 */

public class PDialogModule extends ReactContextBaseJavaModule {

    public PDialogModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    private int position ;

    private SparseArray multiArray = new SparseArray();

    @Override
    public String getName() {
        return "PDialogModule";
    }

    /**
     * 加载dialog
     * @param successCallback
     */
    @ReactMethod
    public void showLoadingDialog(Callback successCallback) {
        ProgressDialog dialog = new ProgressDialog(getCurrentActivity());
        dialog.setMessage("加载中");
        dialog.show();
    }

    @ReactMethod
    public void showMsgDialog(Callback successCallback) {
        AlertDialog.Builder builder = new AlertDialog.Builder(getCurrentActivity());
        builder.setTitle("Dialog").setMessage("测试内容").show();
    }

    /**
     * 单确认按钮dialog
     * @param successCallback
     */
    @ReactMethod
    public void showSingleConfrimDialog(Callback successCallback) {
        AlertDialog.Builder builder = new AlertDialog.Builder(getCurrentActivity());
        builder.setTitle("Dialog").setMessage("测试内容").setPositiveButton("确认", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                Toast.makeText(getCurrentActivity(),"确定",Toast.LENGTH_SHORT).show();
            }
        }).show();
    }

    /**
     * 确认，取消按钮
     * @param successCallback
     */
    @ReactMethod
    public void showDialog(Callback successCallback) {
        AlertDialog.Builder builder = new AlertDialog.Builder(getCurrentActivity());
        builder.setTitle("Dialog").setMessage("测试内容").setPositiveButton("确认", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                Toast.makeText(getCurrentActivity(),"确定",Toast.LENGTH_SHORT).show();
            }
        }).setNegativeButton("取消", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                Toast.makeText(getCurrentActivity(),"取消",Toast.LENGTH_SHORT).show();
            }
        }).show();
    }

    @ReactMethod
    public void showSingleDialog(Callback successCallback) {
        final String[] str = {"测试1","测试2","测试3"};
        AlertDialog.Builder builder = new AlertDialog.Builder(getCurrentActivity());
        builder.setTitle("Dialog").setItems(str, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                Toast.makeText(getCurrentActivity(), str[which], Toast.LENGTH_SHORT).show();
            }
        }).show();
    }

    @ReactMethod
    public void showSingleChooseDialog(Callback successCallback) {
        final String[] str = {"测试1","测试2","测试3"};
        position = -1;
        AlertDialog.Builder builder = new AlertDialog.Builder(getCurrentActivity());
        builder.setTitle("Dialog").setSingleChoiceItems(str, -1, new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                position = which;
            }
        }).setPositiveButton("确认", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                if(position>=0) {
                    Toast.makeText(getCurrentActivity(), str[position], Toast.LENGTH_SHORT).show();
                }else{

                }
            }
        }).setNegativeButton("取消", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                Toast.makeText(getCurrentActivity(),"取消",Toast.LENGTH_SHORT).show();
            }
        }).show();
    }

    @ReactMethod
    public void showMultiChoiceDialog(Callback successCallback) {
        final String[] items = {"测试1","测试2","测试3"};
        AlertDialog.Builder builder = new AlertDialog.Builder(getCurrentActivity());
        builder.setTitle("Dialog")
        .setMultiChoiceItems(items, null, new DialogInterface.OnMultiChoiceClickListener() {

            @Override
            public void onClick(DialogInterface dialog, int which, boolean isChecked) {
                if(isChecked){
                    multiArray.put(which,items[which]);
                }else{
                    multiArray.remove(which);
                }

            }
        }).setPositiveButton("确认", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                String str = "";
                for(int i=0;i<multiArray.size();i++){
                    str += (String)multiArray.valueAt(i);
                }
                Toast.makeText(getCurrentActivity(),str,Toast.LENGTH_SHORT).show();
            }
        }).setNegativeButton("取消", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                Toast.makeText(getCurrentActivity(),"取消",Toast.LENGTH_SHORT).show();
            }
        }).show();
    }

    @ReactMethod
    public void showDatePickerDialog(Callback successCallback){

    }

    @ReactMethod
    public void showShareDialog(Callback successCallback){

    }
}
