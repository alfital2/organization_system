package com.example.bprecise;
import java.io.Console;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmployeesController {

    private List<Employee> empsList = new ArrayList<>();

    private void generateEmpsList() {

        Employee tal = new Employee("Tal", "Alfi", "CEO",1);
        Employee nikiti =  new Employee("Nikiti", "Po", "Cleaning",2);
        Employee hod = new Employee("Hod", "Ami", "FEDteam-leader",3);
        Employee tim = new Employee("Tim", "Leader", "Backteam-leader",4);

        Employee worko = new Employee("Worko", "Holic", "frontEnd",5);
        Employee ishi = new Employee("Ishi", "Moto", "backEnd",6);
        Employee doin = new Employee("Doin", "Gevrithing", "FullStack",7);
        Employee stam = new Employee("Stam", "OseKeilu", "QA",8);

        empsList.add(tal);
        empsList.add(hod);
        empsList.add(worko);
        empsList.add(ishi);
        empsList.add(doin);
        empsList.add(stam);
        empsList.add(tim);
        empsList.add(nikiti);

        tal.addSubordinates(nikiti);
        tal.addSubordinates(hod);
        tal.addSubordinates(doin);
        tal.addSubordinates(tim);

        hod.addSubordinates(worko);
        hod.addSubordinates(stam);

        tim.addSubordinates(ishi);

        Task talTask = new Task("build FS website!!!", "2021-07-24");
        tal.addTask(talTask);
    }

    private Employee getEmployee(int id) {
        for(Employee emp : empsList)
            if(emp.getId() == id) return emp; 
        return null;
    }   

    @ResponseBody
    @RequestMapping(value = "/testFoo", method = RequestMethod.GET)
    public String  foo(@RequestBody TestElement test){
        return "Worked! "+test.toString();
    }

    @CrossOrigin
    @RequestMapping(value="/getEmployees")
    public List<Employee> getEmployees() {
        if(empsList.isEmpty()) generateEmpsList();
        return empsList;
    }

    @ResponseBody
    @CrossOrigin
    @RequestMapping(value = "/{empId}/sendReport", method = RequestMethod.POST)
    public Report sendReport(@PathVariable int empId, @RequestBody Report report) {
        Employee manager = getEmployee(empId);
        manager.addReport(report);
        return report;
    }

    @ResponseBody
    @CrossOrigin
    @RequestMapping(value = "/{empId}/assignTask", method = RequestMethod.POST)
    public Task assignTask(@PathVariable int empId, @RequestBody Task task) {
        Employee employee = getEmployee(empId);
        employee.addTask(task);
        return task;
    }

   

}


