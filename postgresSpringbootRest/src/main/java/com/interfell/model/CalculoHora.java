package com.interfell.model;

import javax.persistence.*;

@Entity
@Table(name = "tutorials")
public class CalculoHora {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;



	@Column(name = "time")
	private String time;

	@Column(name = "timezone")
	private String timezone;

	public CalculoHora() {

	}

	public CalculoHora(String dato1, String dato2) {
		this.time = dato1;
		this.timezone = dato2;
	}

	public long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "CalculoHora{" +
				"id=" + id +
				", time='" + time + '\'' +
				", timezone='" + timezone + '\'' +
				'}';
	}

	public void setId(long id) {
		this.id = id;
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
