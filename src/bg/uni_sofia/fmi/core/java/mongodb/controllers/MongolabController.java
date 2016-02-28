package bg.uni_sofia.fmi.core.java.mongodb.controllers;

import java.util.List;

import org.bson.Document;

import com.mongodb.*;
import com.mongodb.client.*;
//import static com.mongodb.client.model.Filters.*; // for and() and eq() in find and delete

public final class MongolabController {
	
    private static final MongoClientURI MongoDBConnectionURI = new MongoClientURI("mongodb://test:test@ds055574.mongolab.com:55574/hw_3");
    private final MongoClient client;
    private final MongoDatabase DB;
    private MongoCollection<Document> collection;

	public MongolabController() {
        this.client = new MongoClient(MongoDBConnectionURI);
        this.DB = this.client.getDatabase("hw_3");
        this.collection = this.DB.getCollection("competitions");
    }

	public static MongoClientURI getMongoDBConnectionURI() {
		return MongoDBConnectionURI;
	}

	public MongoClient getClient() {
		return client;
	}

	public MongoDatabase getDB() {
		return DB;
	}
	
    public MongoCollection<Document> getCollection() {
		return collection;
	}

	public void setCollection(String collectionName) {
		this.collection = this.getDB().getCollection(collectionName);
	}
	
	public void insertDocument(Document doc) {
		this.getCollection().insertOne(doc);
	}
	
	public void insertManyDocuments(List<Document> docs) {
		this.getCollection().insertMany(docs);
	}
	
}

