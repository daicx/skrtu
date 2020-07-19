package com.skr.skrtu.myexception;

import lombok.Data;

@Data
public class ResultVO {
    private String code;
    private String msg;
    private Object data;

    public static ResultVO success() {
        ResultVO resultVO = new ResultVO();
        ResultEnum success = ResultEnum.SUCCESS;
        resultVO.setCode(success.getCode());
        resultVO.setMsg(success.getMsg());
        return resultVO;
    }

    public static ResultVO success(Object data) {
        ResultVO resultVO = new ResultVO();
        ResultEnum success = ResultEnum.SUCCESS;
        resultVO.setCode(success.getCode());
        resultVO.setMsg(success.getMsg());
        resultVO.setData(data);
        return resultVO;
    }

    public static ResultVO error(String code, String msg, Object data) {
        ResultVO resultVO = new ResultVO();
        resultVO.setCode(code);
        resultVO.setMsg(msg);
        resultVO.setData(data);
        return resultVO;
    }

    public static ResultVO error(String code, String msg) {
        ResultVO resultVO = new ResultVO();
        resultVO.setCode(code);
        resultVO.setMsg(msg);
        return resultVO;
    }

    public static ResultVO error(ResultEnum resultEnum) {
        ResultVO resultVO = new ResultVO();
        resultVO.setCode(resultEnum.getCode());
        resultVO.setMsg(resultEnum.getMsg());
        return resultVO;
    }

    public static ResultVO error(ResultEnum resultEnum, Object data) {
        ResultVO resultVO = new ResultVO();
        resultVO.setCode(resultEnum.getCode());
        resultVO.setMsg(resultEnum.getMsg());
        resultVO.setData(data);
        return resultVO;
    }

}
