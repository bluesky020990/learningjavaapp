package com.khanhtran.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloController {

    @RequestMapping("/")
    public String index(){
        return "index";
    }

    @RequestMapping({ "/english/**", "/angular/**", "/java/**", "/spring-fw/**" })
    public String forwardAngular() {
        return "index";
    }

    @RequestMapping("/hello")
    public ModelAndView hello() {
        return new ModelAndView("home");
    }

}
