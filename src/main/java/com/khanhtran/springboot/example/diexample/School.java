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



    public static void main(String args[]){
        School a = new School("Khanh Tran", "Grade 1");

        a.setName("Ltran B");


        Long numb_1 = 10l;
        Long numb_2 = 10l;

        System.out.println(numb_1 == numb_2);

        String char_1 = "abc";
        String char_2 = new String("aBc");

        System.out.println(char_1 == char_2);
        System.out.println(char_1.equalsIgnoreCase(char_2));

    }
}
