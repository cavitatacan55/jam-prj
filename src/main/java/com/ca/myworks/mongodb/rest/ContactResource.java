package com.ca.myworks.mongodb.rest;

import java.util.List;

import javax.ejb.EJB;
import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;

import com.ca.myworks.mongodb.dao.ContactDao;
import com.ca.myworks.mongodb.model.Contact;

@RequestScoped
@Path("/contacts")
public class ContactResource {

	@EJB
	ContactDao dao;
	
	@GET()
	@Produces("application/json")
	public List<Contact> getAllContacts() {
		return dao.getAll();
		
	}
}
