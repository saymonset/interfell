package com.interfell.spring.service;

import org.springframework.stereotype.Service;
import com.interfell.dto.CalculoHora;
/**
 * Created by simon on 6/20/2021.
 */

public interface CalculoHoraService {

    CalculoHora horacalculada(String hora, String timezone);


}
