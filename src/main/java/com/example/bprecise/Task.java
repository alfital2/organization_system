package com.example.bprecise;

import java.util.Date;

public class Task {
    private String text;
    String dueDate;

   public Task(String text, String dueDate) {
       this.text = text;
       this.dueDate = dueDate;
   }


    public String getText() {
        return text;
    }

    // public void setText(String text) {
    //     this.text = text;
    // }

    // public String getDate() {
    //     return dueDate;
    // }


    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    @Override
    public String toString() {
        return text+ " "+dueDate;
    }
}




// package com.example.bprecise;

// import java.util.Date;

// public class Task {
//     private String text;
//     Date dueDate;

//    public Task(String text, Date dueDate) {
//        this.text = text;
//        this.dueDate = dueDate;
//    }


//     public String getText() {
//         return text;
//     }

//     // public void setText(String text) {
//     //     this.text = text;
//     // }

//     // public String getDate() {
//     //     return dueDate;
//     // }


//     public Date getDueDate() {
//         return dueDate;
//     }

//     public void setDueDate(Date dueDate) {
//         this.dueDate = dueDate;
//     }

//     @Override
//     public String toString() {
//         return text+ " "+dueDate;
//     }
// }


