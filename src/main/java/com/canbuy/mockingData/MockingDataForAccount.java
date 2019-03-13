package com.canbuy.mockingData;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.canbuy.model.AccountDetail;

@Component
public class MockingDataForAccount {
	
	public List<AccountDetail> getAccountDetail(String custId){
		List<AccountDetail> accountList=new ArrayList<AccountDetail>();
		for(int i=0;i<5;i++) {
			AccountDetail accountDetail = new AccountDetail();
			accountDetail.setAccountNo("576"+i);
			accountDetail.setBalance("5000");
			accountDetail.setDesc("Test");
			accountDetail.setCustId("930101");	
			accountList.add(accountDetail);
		}
		return accountList;
	}

}
