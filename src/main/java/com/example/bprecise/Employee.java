package com.example.bprecise;

import java.util.ArrayList;
        import java.util.Date;
        import java.util.List;
        import java.util.concurrent.atomic.AtomicInteger;

public class Employee {
    private final int id;
    private String firstName;
    private String lastName;
    private String position;
    private Employee manager;
    private List<Employee> subOrdinates;
    private List<Task> tasks;
    private List<Report> reports;

    public Employee(String firstName, String lastName, String position,int id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.id = id;
        subOrdinates = new ArrayList<Employee>();
        tasks = new ArrayList<Task>();
        reports = new ArrayList<Report>();
        // each employee is his own manager until a new one is assigned
        this.manager = this;
    }

   
    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getPosition() {
        return position;
    }

    public List<Employee> getSubordinates() {
        return subOrdinates;
    }

    // also sets manager!
    public void addSubordinates(Employee newSub){
        subOrdinates.add(newSub);
        newSub.setManager(this);
    }

    public int getManager() {
        return this.manager.id;
    }

    public void add(Employee emp) {
        subOrdinates.add(emp);
    }

    public void setManager(Employee manager){
        this.manager = manager;
    }

    public void addReport(Report report){
        reports.add(report);
    }

    public void addTask(Task task){
        tasks.add(task);
    }
    
    public List<Task> getTasks(){
        return tasks;
    }

    public int getId() {
        return id;
    }
}

