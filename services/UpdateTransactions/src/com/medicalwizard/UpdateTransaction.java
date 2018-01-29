package com.medicalwizard;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.hibernate.Query;
import org.hibernate.Session;

import com.google.gson.Gson;
import com.tyro.Tyro;
import com.tyro.TyroConstants;
import com.tyro.data.TransactionData;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.javaservice.JavaServiceSuperClass;
import com.wavemaker.runtime.service.annotations.ExposeToClient;

/**
 * This is a client-facing service class. All public methods will be exposed to
 * the client. Their return values and parameters will be passed to the client
 * or taken from the client, respectively. This will be a singleton instance,
 * shared between all requests.
 * 
 * To log, call the superclass method log(LOG_LEVEL, String) or log(LOG_LEVEL,
 * String, Exception). LOG_LEVEL is one of FATAL, ERROR, WARN, INFO and DEBUG to
 * modify your log level. For info on these levels, look for tomcat/log4j
 * documentation
 */
@ExposeToClient
public class UpdateTransaction extends JavaServiceSuperClass {
	/*
	 * Pass in one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log
	 * level; recommend changing this to FATAL or ERROR before deploying. For
	 * info on these levels, look for tomcat/log4j documentation
	 */
	public UpdateTransaction() {
		super(INFO);
	}

	enum RESULT {
		APPROVED {
			public String getString() {
				return "APPROVED";
			}
		},
		REVERSED {
			public String getString() {
				return "REVERSED";
			}
		},
		DECLINED {
			public String getString() {
				return "DECLINED";
			}
		},
		SYSTEM_ERROR {
			public String getString() {
				return "SYSTEM ERROR";
			}
		},
		UNKNOWN {
			public String getString() {
				return "UNKNOWN";
			}
		},
		NOT_STARTED {
			public String getString() {

				return "NOT STARTED";
			}
		};
		public String getString() {
			return "";
		}
	}

	public String setStatus(Integer id, String status) {
		String result = null;
		Tyro tyro = (Tyro) RuntimeAccess.getInstance().getServiceBean("tyro");
		tyro.begin();
		Session session = tyro.getDataServiceManager().getSession();

		tyro.updateTransactionStatus(status, id, null);

		session.getTransaction().commit();

		tyro.commit();
		// tyro.updateTransaction(null, null, null, null, null);
		// transaction.updateTransactionData(data);

		return "Success";
	}

	public String updateTransactionData(String data, Integer id, String status) {
		String result = "Success";

		Gson gson = new Gson();
		TransactionData transactionData = gson.fromJson(data,
				TransactionData.class);
		DateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
		
		Tyro tyro = (Tyro) RuntimeAccess.getInstance().getServiceBean("tyro");
		
		try {
		
		tyro.begin();
		Session session = tyro.getDataServiceManager().getSession();
		
			session.beginTransaction();

			status = "Trx processed and Status " + transactionData.getResult();

			if (transactionData.getResult().equalsIgnoreCase(
					RESULT.APPROVED.getString())) {

				session.save(transactionData);

				status = " Trx processed Sucessfully via  "
						+ transactionData.getCardType();

			}

			Query query = session
					.getNamedQuery(TyroConstants.updateTransactionResultQueryName);
			query.setParameter("id", id);
			query.setParameter("transactionDateTime", df.format(new Date()));
			query.setParameter("status", status);
			query.setParameter("tyroStatus", transactionData.getResult());
			query.setParameter("transactionDataId", transactionData.getId());
			query.setParameter("isNew", "0");

			query.executeUpdate();
			tyro.commit();
			
			
			
		} catch (Exception ex) {
			result = "failure";
			tyro.rollback();
			
		}

		return result;
	}
}
