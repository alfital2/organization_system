package com.example.bprecise;
import java.util.Date;

public class Report {
    private String text;
    private Date date;

    
    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return getText()+ " "+ getDate();
    }
}
