package com.interfell.spring.service.impl;

import com.interfell.dto.CalculoHora;
import com.interfell.repository.CalculoHoraRepository;
import com.interfell.spring.service.CalculoHoraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by simon on 6/20/2021.
        */
@Service("calculoHoraService")
public class CalculoHoraServiceImpl implements CalculoHoraService {

    @Autowired
    CalculoHoraRepository calculoHoraRepository;


    public CalculoHora horacalculada(String time, String timezone) {
        return new CalculoHora("18:31:45", "-3");
    }
}
