package com.khanhtran.springboot.example.diexample;

import java.util.List;

public class School {
    private String name;
    private String grade;
    private List<Clazz> clazzList;

    public School() {
    }

    public School(String name, String grade) {
        this.name = name;
        this.grade = grade;
    }

    public School(String name, String grade, List<Clazz> clazzList) {
        this.name = name;
        this.grade = grade;
        this.clazzList = clazzList;
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

    public void displayInfo(){
        System.out.println(" This is  " + name + " of grade " + grade);

        if(clazzList != null && clazzList.size() > 0){
            System.out.println(" This is info of classes in school: ");
            for(Clazz clazz : clazzList){
                clazz.displayInfo();
            }
        }
    }

    public List<Clazz> getClazzList() {
        return clazzList;
    }

    public void setClazzList(List<Clazz> clazzList) {
        this.clazzList = clazzList;
    }
}
