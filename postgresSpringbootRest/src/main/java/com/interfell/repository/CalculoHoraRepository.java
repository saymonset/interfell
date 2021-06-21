package com.interfell.repository;

import java.util.List;

import com.interfell.model.CalculoHora;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CalculoHoraRepository extends JpaRepository<CalculoHora, Long> {
  List<CalculoHora> findByTimeContaining(String time);
}
