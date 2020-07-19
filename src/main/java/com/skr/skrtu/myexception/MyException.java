package com.skr.skrtu.myexception;

/**
 * 自定义业务异常
 */
public class MyException extends RuntimeException {
    private ResultEnum resultEnum;

    public ResultEnum getResultEnum() {
        return resultEnum;
    }

    public MyException() {
        super();
    }

    public MyException(ResultEnum resultEnum) {
        super(resultEnum.getMsg());
        this.resultEnum = resultEnum;
    }

    public MyException(Throwable cause) {
        super(cause);
    }

    public MyException(ResultEnum resultEnum, Throwable cause) {
        super(resultEnum.getMsg(), cause);
        this.resultEnum = resultEnum;
    }

    public MyException(ResultEnum resultEnum, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(resultEnum.getMsg(), cause, enableSuppression, writableStackTrace);
        this.resultEnum = resultEnum;
    }

    @Override
    public Throwable fillInStackTrace() {
        return this;
    }
}
