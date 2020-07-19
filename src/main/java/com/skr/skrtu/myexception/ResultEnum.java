package com.skr.skrtu.myexception;

/**
 * 错误码,5个字符组成
 * A 用户错误
 * B 系统错误
 * C 三方错误
 */
public enum ResultEnum {
    SUCCESS("00000", "success"),
    UNKNOW_ERROR("A0001", "unknow error"),
    USER_PASSWORD_ERROR("A0002", "user or password error"),
    NPE("B0001", "null exception error"),
    SQL_ERROR("B0002", "sql error"),
    MAIL_ERROR("C0001", "mail error"),
    A("", "");
    private String code;
    private String msg;

    ResultEnum(String code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public String getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }
}
