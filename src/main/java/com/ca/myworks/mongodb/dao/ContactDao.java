package com.ca.myworks.mongodb.dao;

import java.util.ArrayList;
import java.util.List;
import javax.ejb.EJB;
import javax.ejb.Stateless;
import org.bson.Document;
import org.bson.types.ObjectId;
import com.ca.myworks.mongodb.util.MongoClientProvider;
import com.ca.myworks.mongodb.map.ContactMapper;
import com.ca.myworks.mongodb.model.Contact;
import com.mongodb.BasicDBObject;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;

@Stateless
public class ContactDao {

	public final String COLLECTION_NAME = "Contact";
	private ContactMapper mapper = new ContactMapper();
	
	@EJB
	MongoClientProvider mongoClientProvider;
	
	public List<Contact> getAll() {
		
		List<Contact> list = new ArrayList<Contact>();
		
		MongoCollection<Document> collection = mongoClientProvider.getMongoClient().getDatabase(mongoClientProvider.DATABASE).getCollection(COLLECTION_NAME);
		FindIterable<Document> documents = collection.find();
		for (Document document : documents) {
            list.add(mapper.fromDocument(document));
        }
        return list;
	}
	
	
    public void save(Contact entry) {
    	
    	MongoCollection<Document> collection = mongoClientProvider.getMongoClient().getDatabase(mongoClientProvider.DATABASE).getCollection(COLLECTION_NAME);
    	
    	collection.insertOne(mapper.toDocument(entry));
    }
    
    public void delete(Contact entry) {
    	MongoCollection<Document> collection = mongoClientProvider.getMongoClient().getDatabase(mongoClientProvider.DATABASE).getCollection(COLLECTION_NAME);
    	
    	collection.deleteOne(mapper.toDocument(entry));
    }
    
    public void update(Contact entry) {
    	MongoCollection<Document> collection = mongoClientProvider.getMongoClient().getDatabase(mongoClientProvider.DATABASE).getCollection(COLLECTION_NAME);
    	
    	collection.updateOne(new Document("_id", entry.get_id()), new Document("$set", mapper.toDocument(entry)));
    }
    
    public Contact findById(ObjectId id) {	
    	BasicDBObject searchQuery = new BasicDBObject();
		searchQuery.put("_id", id);
		MongoCollection<Document> collection = mongoClientProvider.getMongoClient().getDatabase(mongoClientProvider.DATABASE).getCollection(COLLECTION_NAME);
		FindIterable<Document> cursor = collection.find(searchQuery);
		return mapper.fromDocument(cursor.first());
    }
    
}
