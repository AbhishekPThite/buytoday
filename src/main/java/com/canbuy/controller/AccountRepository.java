package com.canbuy.controller;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.canbuy.model.AccountDetail;

/**
 * 
 * @author Ramesh
 *
 */
@Repository
public interface AccountRepository extends JpaRepository<AccountDetail, String> {

	List<AccountDetail> findAll();

	@SuppressWarnings("unchecked")
	AccountDetail save(AccountDetail accountDetail);

	AccountDetail findByCustId(@Param("custId") String custId);

}
