package com.canbuy.model;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.hibernate.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class AccountService {
	@PersistenceContext
	private EntityManager entityManager;

	public AccountDetail find(String id) {
		return entityManager.find(AccountDetail.class, id);
	}
	
	
	public List<AccountDetail> findAll() {
		Query query = (Query) entityManager.createNamedQuery("query_find_all_users", AccountDetail.class);
		return ((TypedQuery<AccountDetail>) query).getResultList();
	}
}