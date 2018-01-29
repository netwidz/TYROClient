
package com.tyro;

import java.util.List;

import com.tyro.data.output.GetAllConfigurationsRtnType;
import com.tyro.data.output.GetNewTransactionRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "tyro"
 *  10/20/2014 12:35:02
 * 
 */
@SuppressWarnings("unchecked")
public class Tyro
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<GetAllConfigurationsRtnType> getAllConfigurations(PagingOptions pagingOptions) {
        return ((List<GetAllConfigurationsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (TyroConstants.getAllConfigurationsQueryName), pagingOptions));
    }
    
    public List<GetNewTransactionRtnType> getNewTransaction(PagingOptions pagingOptions) {
        return ((List<GetNewTransactionRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (TyroConstants.getNewTransaction), pagingOptions));
    }

    
    
    public com.tyro.data.TransactionData getTransactionDataById(Integer id, PagingOptions pagingOptions) {
        List<com.tyro.data.TransactionData> rtn = ((List<com.tyro.data.TransactionData> ) dsMgr.invoke(taskMgr.getQueryTask(), (TyroConstants.getTransactionDataByIdQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer updateConfigurations(String value, String key, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (TyroConstants.updateConfigurationsQueryName), value, key, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer updateTransactionResult(String status, Integer id, String tyroStatus, String transactionDateTime, Integer transactionDataId, String isNew, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (TyroConstants.updateTransactionResultQueryName), status, id, tyroStatus, transactionDateTime, transactionDataId, isNew, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer updateTransactionStatus(String status, Integer id, PagingOptions pagingOptions) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (TyroConstants.updateTransactionStatusQueryName), status, id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
