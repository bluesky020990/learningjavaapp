package com.khanhtran.springboot.example.diexample;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class BeanFactoryExample {

    public static void main(String[] args) {
        Resource resource=new ClassPathResource("diApplicationContext.xml");
        BeanFactory factory=new XmlBeanFactory(resource);

        Student student=(Student) factory.getBean("studentbean");
        student.displayInfo();

        School school=(School) factory.getBean("schoolbean");
        school.displayInfo();

        School schoolSetterExample =(School) factory.getBean("schoolbeanSetter");
        schoolSetterExample.displayInfo();

        Student studentByInject=(Student) factory.getBean("studentByInject");
        studentByInject.displayInfo();

        Clazz clazz01 =(Clazz) factory.getBean("clazz01");
        clazz01.displayInfo();

        Clazz clazz02 =(Clazz) factory.getBean("clazz02");
        clazz02.displayInfo();


    }
}
