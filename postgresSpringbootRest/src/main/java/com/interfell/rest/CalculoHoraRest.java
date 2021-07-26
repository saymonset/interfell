package com.interfell.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.interfell.dto.CalculoHora;
import com.interfell.spring.service.CalculoHoraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.interfell.repository.CalculoHoraRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class CalculoHoraRest {

	@Autowired
	CalculoHoraService calculoHoraService;



	//@PostMapping("/tutorials")
	@RequestMapping(value="/calculaHora", method= RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public CalculoHora createTutorial(@RequestBody CalculoHora calculoHora) {
		try {
//			CalculoHora _tutorial = calculoHoraRepository
//					.save(new CalculoHora(tutorial.getTitle(), tutorial.getDescription(), false));
	//		return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
			return calculoHoraService.horacalculada(calculoHora.getTime(),
					calculoHora.getTimezone());
		} catch (Exception e) {
			return null;
		}
	}



//	@RequestMapping(value="/tasks", method= RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
//	public List<TaskRepresentation> getTasks(@RequestParam String assignee) {
//		List<Task> tasks = myService.getTasks(assignee);
//		List<TaskRepresentation> dtos = new ArrayList<TaskRepresentation>();
//		for (Task task : tasks) {
//			dtos.add(new TaskRepresentation(task.getId(), task.getName()));
//		}
//		return dtos;
//	}

}
