package com.skr.skrtu;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OpenAPIDefinition(
        info = @Info(
                title = "接口文档",
                version = "1.0.0"
        )
)
@SpringBootApplication
public class SkrtuApplication {

    public static void main(String[] args) {
        SpringApplication.run(SkrtuApplication.class, args);
    }

}
