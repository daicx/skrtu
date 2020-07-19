package com.skr.skrtu.myexception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

/**
 * 异常处理器
 */
@RestControllerAdvice
@Slf4j
public class MyExceptionHandler {

    /**
     * 处理业务异常
     *
     * @param req
     * @param e
     * @return
     */
    @ExceptionHandler(value = MyException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResultVO myExceptionHandler(HttpServletRequest req, MyException e) {
        ResultEnum resultEnum = e.getResultEnum();
        log.error("业务异常,code:{},msg:{}", resultEnum.getCode(), resultEnum.getMsg());
        return ResultVO.error(resultEnum);
    }

    /**
     * 处理空指针的异常
     *
     * @param req
     * @param e
     * @return
     */
    @ExceptionHandler(value = NullPointerException.class)
    public ResultVO exceptionHandler(HttpServletRequest req, NullPointerException e) {
        log.error("发生空指针异常！原因是:", e);
        return ResultVO.error(ResultEnum.NPE.getCode(), e.getMessage());
    }

    /**
     * 处理其他异常
     *
     * @param req
     * @param e
     * @return
     */
    @ExceptionHandler(value = Exception.class)
    public ResultVO exceptionHandler(HttpServletRequest req, Exception e) {
        log.error("未知异常！原因是:", e);
        return ResultVO.error(ResultEnum.UNKNOW_ERROR.getCode(), e.getMessage());
    }
}
