
package com.tyro.data;

import java.io.Serializable;


/**
 *  tyro.ConfigurationsId
 *  10/17/2014 12:24:54
 * 
 */
public class ConfigurationsId
    implements Serializable
{

    private String key;
    private String value;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof ConfigurationsId)) {
            return false;
        }
        ConfigurationsId other = ((ConfigurationsId) o);
        if (this.key == null) {
            if (other.key!= null) {
                return false;
            }
        } else {
            if (!this.key.equals(other.key)) {
                return false;
            }
        }
        if (this.value == null) {
            if (other.value!= null) {
                return false;
            }
        } else {
            if (!this.value.equals(other.value)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.key!= null) {
            rtn = (rtn + this.key.hashCode());
        }
        rtn = (rtn* 37);
        if (this.value!= null) {
            rtn = (rtn + this.value.hashCode());
        }
        return rtn;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

}
