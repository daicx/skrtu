package com.skr.skrtu.controller;

import com.skr.skrtu.myexception.ResultVO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1")
public class CMDController {

    @GetMapping("/cmd")
    public ResultVO getDate() {
        return ResultVO.success();
    }
}
