package com.khanhtran.springboot.example.diexample;

public class Table {
    static void printTable(String name, int n) {
//        synchronized (Table.class) {
            for (int i = 1; i <= 10; i++) {
                System.out.println(name + ": " + n * i);
                try {
                    Thread.sleep(400);
                } catch (Exception e) {
                }
//            }
        }
    }
}

