package com.khanhtran.springboot.example.diexample;

public class Student {
    private String name;
    private School school;

    public Student() {
    }

    public Student(String name, School school) {
        this.name = name;
        this.school = school;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public School getSchool() {
        return school;
    }

    public void setSchool(School school) {
        this.school = school;
    }

    public void displayInfo() {
        if(school != null){
            System.out.println("Hello: My name is " + name + ". I'm student of " + school.getName() + " school and " + school.getGrade() + ".");
        } else {
            System.out.println("Hello: My name is " + name + ".");
        }

    }
}
