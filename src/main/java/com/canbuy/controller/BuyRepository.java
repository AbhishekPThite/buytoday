package com.canbuy.controller;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.canbuy.model.BuyDecision;

@Repository
public interface BuyRepository extends JpaRepository<BuyDecision, String> {
	BuyDecision findByCustIdAndCategory(@Param("custId") String custId, @Param("category") String category);
}
