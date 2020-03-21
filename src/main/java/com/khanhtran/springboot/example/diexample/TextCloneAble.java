package com.khanhtran.springboot.example.diexample;

public class TextCloneAble implements Cloneable {
    private String name;

    public TextCloneAble(String name) {
        this.name = name;
    }

    public void display(){
        System.out.println("this is " + name);
    }





    public static void main(String args[]) throws CloneNotSupportedException {
        TextCloneAble cloneAble = new TextCloneAble("Khanh Tran");

        cloneAble.display();

        TextCloneAble cloneObject = (TextCloneAble) cloneAble.clone();

        cloneObject.display();

    }
}


