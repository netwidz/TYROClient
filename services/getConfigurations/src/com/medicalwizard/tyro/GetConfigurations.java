package com.medicalwizard.tyro;

import java.util.Iterator;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.transform.Transformers;
import org.json.JSONException;

import com.tyro.Tyro;
import com.tyro.TyroConstants;
import com.tyro.data.Configurations;
import com.wavemaker.json.JSONObject;
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
public class GetConfigurations extends JavaServiceSuperClass {
	/*
	 * Pass in one of FATAL, ERROR, WARN, INFO and DEBUG to modify your log
	 * level; recommend changing this to FATAL or ERROR before deploying. For
	 * info on these levels, look for tomcat/log4j documentation
	 */
	public GetConfigurations() {
		super(INFO);
	}

	public String getAllConfigurations() {
		List<Configurations> result = null;

		Tyro service = (Tyro) RuntimeAccess.getInstance()
				.getServiceBean("tyro");
		service.begin();

		Session session = service.getDataServiceManager().getSession();

		Query query = session
				.getNamedQuery(TyroConstants.getAllConfigurationsQueryName);

		result = query.setResultTransformer(
				Transformers.aliasToBean(Configurations.class)).list();

		JSONObject jsonOut = new JSONObject();

		if (result.size() > 0) {

			for (Configurations configurations : result) {
				jsonOut.put(configurations.getKey(), configurations.getValue());
			}
		}

		return jsonOut.toString();
	}

	public String updateConfigs(String data) {
		String response = "success";

		try {
			org.json.JSONObject newVal = new org.json.JSONObject(data);
			org.json.JSONObject oldVal = new org.json.JSONObject(
					getAllConfigurations());

			Tyro service = (Tyro) RuntimeAccess.getInstance().getServiceBean(
					"tyro");
			service.begin();

			Session session = service.getDataServiceManager().getSession();

			Query queryUpdate = session
					.getNamedQuery(TyroConstants.updateConfigurationsQueryName);

			for (Iterator<String> iterator = newVal.keys(); iterator.hasNext();) {
				String key = (String) iterator.next();

				if (oldVal.has(key)) {

					if (!oldVal.get(key).equals(newVal.get(key))) {
						queryUpdate.setParameter("key", key);
						queryUpdate.setParameter("value", newVal.get(key));
						queryUpdate.executeUpdate();
						//session.getTransaction().commit();
					}

				} else {
					Configurations conf = new Configurations();
					conf.setKey(key);
					conf.setValue((String) newVal.get(key));

					session.save(conf);
					//session.getTransaction().commit();
				}

			}
			service.commit();

		} catch (JSONException e) {
			response = "failure";
		}

		return response;
	}

}