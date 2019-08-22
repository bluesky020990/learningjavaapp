package com.khanhtran.springboot.example.diexample;

import org.thymeleaf.util.StringUtils;

import java.util.List;

public class Clazz {
    private String name;
    private String grade;
    private List<String> teachers;

    public Clazz() {

    }

    public Clazz(String name, String grade, List<String> teachers) {
        this.name = name;
        this.grade = grade;
        this.teachers = teachers;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public List<String> getTeachers() {
        return teachers;
    }

    public void setTeachers(List<String> teachers) {
        this.teachers = teachers;
    }

    public void displayInfo(){
        String message = " This is  " + name + " of grade " + grade;
        message += teachers != null && teachers.size() > 0 ? ". My class has these teachers : "  + StringUtils.join(teachers, " ,")  + "." : ".";
        System.out.println(message);
    }
}
