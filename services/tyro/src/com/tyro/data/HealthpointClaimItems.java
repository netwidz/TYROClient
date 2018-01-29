
package com.tyro.data;



/**
 *  tyro.HealthpointClaimItems
 *  10/20/2014 11:37:51
 * 
 */
public class HealthpointClaimItems {

    private Integer id;
    private Integer healthPointClaimId;
    private String claimAmount;
    private String rebateAmount;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getHealthPointClaimId() {
        return healthPointClaimId;
    }

    public void setHealthPointClaimId(Integer healthPointClaimId) {
        this.healthPointClaimId = healthPointClaimId;
    }

    public String getClaimAmount() {
        return claimAmount;
    }

    public void setClaimAmount(String claimAmount) {
        this.claimAmount = claimAmount;
    }

    public String getRebateAmount() {
        return rebateAmount;
    }

    public void setRebateAmount(String rebateAmount) {
        this.rebateAmount = rebateAmount;
    }

}
