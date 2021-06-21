package com.interfell.dto;

import java.io.Serializable;

/**
 * Created by simon on 6/20/2021.
 */
public class CalculoHora implements Serializable{
    private long id;

    private String time;

    private String timezone;

    public CalculoHora(){}

    public CalculoHora(String time, String timezone) {
        this.time = time;
        this.timezone = timezone;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }
}
