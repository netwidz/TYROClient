
package com.tyro.data;



/**
 *  tyro.Transaction
 *  10/20/2014 11:37:51
 * 
 */
public class Transaction {

    private Integer id;
    private Integer transactionId;
    private String amount;
    private String isNew;
    private String isHealthPointClaim;
    private String integratedReceipt;
    private Integer cashout;
    private Integer transactionDataId;
    private String healthPointClaimId;
    private String user;
    private String transactionDateTime;
    private String status;
    private String tyroStatus;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(Integer transactionId) {
        this.transactionId = transactionId;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getIsNew() {
        return isNew;
    }

    public void setIsNew(String isNew) {
        this.isNew = isNew;
    }

    public String getIsHealthPointClaim() {
        return isHealthPointClaim;
    }

    public void setIsHealthPointClaim(String isHealthPointClaim) {
        this.isHealthPointClaim = isHealthPointClaim;
    }

    public String getIntegratedReceipt() {
        return integratedReceipt;
    }

    public void setIntegratedReceipt(String integratedReceipt) {
        this.integratedReceipt = integratedReceipt;
    }

    public Integer getCashout() {
        return cashout;
    }

    public void setCashout(Integer cashout) {
        this.cashout = cashout;
    }

    public Integer getTransactionDataId() {
        return transactionDataId;
    }

    public void setTransactionDataId(Integer transactionDataId) {
        this.transactionDataId = transactionDataId;
    }

    public String getHealthPointClaimId() {
        return healthPointClaimId;
    }

    public void setHealthPointClaimId(String healthPointClaimId) {
        this.healthPointClaimId = healthPointClaimId;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

   
    public String getTransactionDateTime() {
		return transactionDateTime;
	}

	public void setTransactionDateTime(String transactionDateTime) {
		this.transactionDateTime = transactionDateTime;
	}

	public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTyroStatus() {
        return tyroStatus;
    }

    public void setTyroStatus(String tyroStatus) {
        this.tyroStatus = tyroStatus;
    }

}
