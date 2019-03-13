package com.canbuy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.canbuy.model.AccountDetail;
import com.canbuy.model.BuyDecision;

/**
 * 
 * @author Ramesh
 *
 */

@RestController
@RequestMapping(value = "/home", produces = "application/json")
public class AppController {

	@Autowired
	private AccountRepository accountRepository;

	@Autowired
	private BuyRepository buyRepository;

	@PostMapping(value = "/login")
	public List<AccountDetail> login(@RequestParam String userName, @RequestParam String pwd) {

		String custId = null;
		if (userName.equals("Admin") && pwd.equals("Admin") ? true : false) {
			custId = "123";
		} else {
			return null;
		}
	
		List<AccountDetail> accountdetailsList = accountRepository.findAll();
		if (!accountdetailsList.isEmpty()) {
			return accountdetailsList;
		} else {
			return null;
		}
	}

	@RequestMapping(value = "/getSingleAccount/{custId}", method = RequestMethod.GET)
	@ResponseBody
	public AccountDetail getSingleAccount(@PathVariable String custId) {
		AccountDetail accountDetails = accountRepository.findByCustId(custId);
		return accountDetails;

	}

	@RequestMapping(value = "/getAccount", method = RequestMethod.GET)
	@ResponseBody
	public List<AccountDetail> getAccounts() {
		List<AccountDetail> accountdetailsList = accountRepository.findAll();
		// accountdetailsList=mockingDataForAccount.getAccountDetail(custId);
		return accountdetailsList;

	}

	@GetMapping(value = "/getBuyDecision/{custId}/{category}")
	@ResponseBody
	public BuyDecision findByCustIdAndCategory(@PathVariable String custId, @PathVariable String category) {
		BuyDecision buyDecision = buyRepository.findByCustIdAndCategory(custId, category);
		return buyDecision;
	}

	/*
	 * @PostMapping(value = "/createSpendingDetails")
	 * 
	 * @ResponseBody public AccountDetail createSpendingDetails(@PathVariable String
	 * custId, @PathVariable String spendAmount) { AccountDetail accountDetail =
	 * accountRepository.findByCustId(custId); int balanceAmount =
	 * Integer.valueOf(accountDetail.getBalance()) - Integer.valueOf(spendAmount);
	 * accountDetail.setBalance(String.valueOf(balanceAmount)); return
	 * accountRepository.save(accountDetail); }
	 */
	
	@PutMapping("/fundTransfer/{custId}/{amount}")
	public ResponseEntity<Object> fundTransfer(@RequestBody AccountDetail accountDetail, @PathVariable String custId,@PathVariable String amount){
		AccountDetail accountDetails = accountRepository.findByCustId(custId);

		if (null == accountDetails)
			return ResponseEntity.notFound().build();
		String fundBalance= String.valueOf(Integer.valueOf(accountDetails.getBalance())-(Integer.valueOf(amount)));
		accountDetails.setBalance(fundBalance);
		accountRepository.save(accountDetails);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/fixedDeposit/{custId}/{depositAmount}")
	public ResponseEntity<Object> fixedDeposit(@RequestBody AccountDetail accountDetail, @PathVariable String custId,@PathVariable String depositAmount){
		AccountDetail accountDetails = accountRepository.findByCustId(custId);
		accountDetails.setType("Fixed");
		accountDetails.setBalance(depositAmount);
		accountDetails.setDesc("Fixed Deposit Account");
		accountRepository.save(accountDetails);
		return ResponseEntity.noContent().build();
	}
	
	  @GetMapping("/")
	    public String main(Model model) {
	  
	        return "index"; //view
	    }

	
	  
	  @GetMapping(value = "/dashboard")
		@ResponseBody
		public String refreshme() {
			return null;
		}
}
