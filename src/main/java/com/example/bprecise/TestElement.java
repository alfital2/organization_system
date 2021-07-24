package com.example.bprecise;

public class TestElement{

    private int stam;
    private String stam2;

    

    public void setStam(int num) {
        stam = num;
    }

    public int getNum() {
        return stam;
    }

    public String getStringNum() {
        return stam2;
    }


    public void setStam2(String stringNum) {
        stam2 = stringNum;
    }

    @Override
    public String toString() {
        
        return "["+ stam + ","+stam2+"]";
    }
}