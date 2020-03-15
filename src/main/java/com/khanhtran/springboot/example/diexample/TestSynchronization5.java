package com.khanhtran.springboot.example.diexample;

public class TestSynchronization5 {

    public static void main(String[] args) {
        Thread t1 = new Thread() {
            public void run() {
                Table.printTable(this.getName(), 1);
            }
        };

        Thread t2 = new Thread() {
            public void run() {
                Table.printTable(this.getName(), 10);
            }
        };

        Thread t3 = new Thread() {
            public void run() {
                Table.printTable(this.getName(), 100);
            }
        };

        Thread t4 = new Thread() {

            public void run() {
                Table.printTable(this.getName(), 1000);
            }
        };

        t1.start();
        t2.start();
        t3.start();
        t4.start();

    }
}
