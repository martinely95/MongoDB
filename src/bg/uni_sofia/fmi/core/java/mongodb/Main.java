package bg.uni_sofia.fmi.core.java.mongodb;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.bson.Document;

import bg.uni_sofia.fmi.core.java.mongodb.controllers.MongolabController;

//import java.io.*;
//import javax.servlet.*;
//import javax.servlet.http.*;

public class Main  {

	public static void main(String[] args) {
		
		MongolabController mlc = new MongolabController();
		
		//		remove old files
		mlc.getCollection().drop();
		
		// 		0.   Добавете поне 3 състезания с горепосочената информация 
		addCompetitionsAndPrintResult(mlc);
    	
    	//  	1. Изведете трите състезания с най­много участници, които са били проведени в  Бургас 
    	top3InBurgas(mlc);

		//    	2. За всяко състезание, което включва дистанция от 42 км, добавете информация, че 
		//    	състезанието включва маратон 
    	addInfoForMarathonAndPrintResult(mlc);
    	
		//    	3. Изтрийте всички състезания, в които участник на име Peter Petrov или състезател с 
		//    	име Maria Ivanova е спечелил състезанието на 2 км
    	deletePeterAndMariaFor2AndPrintResult(mlc);
    	
		//    	4. Ако за дадено състезание съществува информация, че има спонсор, то добавете 
		//    	дистанцията от 5 км към списъка от разстоянията на състезанието.  
    	addDistanceForSponsorAndPrintResult(mlc);
    	
	}

	public static void drop() {
		MongolabController mlc = new MongolabController();
		
		//		remove old files
		mlc.getCollection().drop();
	}
	
	private static void addCompetitionsAndPrintResult(MongolabController mlc) {
		// i know its ugly
		// 1
		Document competition1 = new Document();
    	competition1.put("name", "Summer competition 2015");
    	competition1.put("location", "Burgas");
    	
    	List<Integer> distances = new ArrayList<>();
    	distances.add(1);
    	distances.add(3);
    	competition1.put("distances", distances);
    	
    	List<String> distance1 = new ArrayList<>();
    	distance1.add("Ivan");
    	distance1.add("Teodor");
    	List<String> distance2 = new ArrayList<>();
    	distance2.add("Joanne");
    	
    	Document winners = new Document();
    	winners.put("1", distance1);
    	winners.put("3", distance2);
    	competition1.put("winners", winners);
    	
    	competition1.put("all_competitors_count", 29);
    	
    	List<String> sponsors = new ArrayList<>();
    	sponsors.add("HP");
    	sponsors.add("FMI");
    	sponsors.add("Dreamix");
    	competition1.put("sponsors", sponsors);
    	
    	mlc.insertDocument(competition1);
    	
    	// 2
    	competition1 = new Document();
    	competition1.put("name", "Summer competition 2016");
    	competition1.put("location", "Varna");
    	
    	distances = new ArrayList<>();
    	distances.add(3);
    	distances.add(42);
    	competition1.put("distances", distances);
    	
    	distance1 = new ArrayList<>();
    	distance1.add("Georgi");
    	distance1.add("Ivaylo");
    	distance2 = new ArrayList<>();
    	distance2.add("Laurent");
    	
    	winners = new Document();
    	winners.put("3", distance1);
    	winners.put("42", distance2);
    	competition1.put("winners", winners);
    	
    	competition1.put("all_competitors_count", 43);
    	
    	sponsors = new ArrayList<>();
    	sponsors.add("HP");
    	sponsors.add("FMI");
    	competition1.put("sponsors", sponsors);
    	
    	
    	mlc.insertDocument(competition1);
    	
    	
    	// 3rd competition
    	
    	competition1 = new Document();
    	competition1.put("name", "Autumn competition 2015");
    	competition1.put("location", "Burgas");
    	
    	distances = new ArrayList<>();
    	distances.add(7);
    	distances.add(13);
    	competition1.put("distances", distances);
    	
    	distance1 = new ArrayList<>();
    	distance1.add("Ivan");
    	distance2 = new ArrayList<>();
    	distance2.add("Stoyan");
    	distance2.add("Todor");
    	
    	winners = new Document();
    	winners.put("7", distance1);
    	winners.put("13", distance2);
    	competition1.put("winners", winners);
    	
    	competition1.put("all_competitors_count", 38);
    	
    	sponsors = new ArrayList<>();
    	sponsors.add("HP");
    	sponsors.add("FMI");
    	competition1.put("sponsors", sponsors);
    	
    	
    	mlc.insertDocument(competition1);
    	
    	
    	// 4 competition
    	
    	competition1 = new Document();
    	competition1.put("name", "Autumn competition 2016");
    	competition1.put("location", "Shumen");
    	
    	distances = new ArrayList<>();
    	distances.add(1);
    	distances.add(3);
    	distances.add(9);
    	competition1.put("distances", distances);
    	
    	distance1 = new ArrayList<>();
    	distance1.add("Gergana");
    	distance1.add("Lora");
    	distance1.add("Nadejda");
    	distance2 = new ArrayList<>();
    	distance2.add("Boyko");
    	List<String> distance3 = new ArrayList<>();
    	distance3.add("Joan");
    	
    	winners = new Document();
    	winners.put("1", distance1);
    	winners.put("3", distance2);
    	winners.put("9", distance3);
    	competition1.put("winners", winners);
    	
    	competition1.put("all_competitors_count", 46);
    	
    	sponsors = new ArrayList<>();
    	sponsors.add("HP");
    	sponsors.add("FMI");
    	competition1.put("sponsors", sponsors);
    	
    	
    	mlc.insertDocument(competition1);
    	
    	// 5 competition
    	
    	competition1 = new Document();
    	competition1.put("name", "Winter competition 2015");
    	competition1.put("location", "Burgas");
    	
    	distances = new ArrayList<>();
    	distances.add(11);
    	distances.add(19);
    	competition1.put("distances", distances);
    	
    	distance1 = new ArrayList<>();
    	distance1.add("John");
    	distance1.add("Lenor");
    	distance1.add("Ariel");
    	distance2 = new ArrayList<>();
    	distance2.add("Samsung");
    	
    	winners = new Document();
    	winners.put("11", distance1);
    	winners.put("19", distance2);
    	competition1.put("winners", winners);
    	
    	competition1.put("all_competitors_count", 19);
    	
    	sponsors = new ArrayList<>();
    	sponsors.add("SAP");
    	sponsors.add("Astea");
    	competition1.put("sponsors", sponsors);
    	
    	
    	mlc.insertDocument(competition1);
    	
    	
    	// 6 competition
    	
    	competition1 = new Document();
    	competition1.put("name", "Winter competition 2016");
    	competition1.put("location", "Smolyan");
    	
    	distances = new ArrayList<>();
    	distances.add(2);
    	distances.add(5);
    	competition1.put("distances", distances);
    	
    	distance1 = new ArrayList<>();
    	distance1.add("Peter Petrov");
    	distance2 = new ArrayList<>();
    	distance2.add("Vostro");
    	
    	winners = new Document();
    	winners.put("2", distance1);
    	winners.put("5", distance2);
    	competition1.put("winners", winners);
    	
    	competition1.put("all_competitors_count", 11);
    	
    	sponsors = new ArrayList<>();
    	sponsors.add("SAP");
    	sponsors.add("Astea");
    	competition1.put("sponsors", sponsors);
    	
    	
    	mlc.insertDocument(competition1);
    	
    	
    	
    	// 7 competition
    	
    	competition1 = new Document();
    	competition1.put("name", "Spring competition 2015");
    	competition1.put("location", "Burgas");
    	
    	distances = new ArrayList<>();
    	distances.add(15);
    	distances.add(42);
    	competition1.put("distances", distances);
    	
    	distance1 = new ArrayList<>();
    	distance1.add("Ivan Ivanov");
    	distance2 = new ArrayList<>();
    	distance2.add("Marin Marinov");
    	
    	winners = new Document();
    	winners.put("15", distance1);
    	winners.put("42", distance2);
    	competition1.put("winners", winners);
    	
    	competition1.put("all_competitors_count", 36);
        	
    	
    	mlc.insertDocument(competition1);
    	
    	
    	// 8 competition
    	
    	competition1 = new Document();
    	competition1.put("name", "Spring competition 2016");
    	competition1.put("location", "Stara Zagora");
    	
    	distances = new ArrayList<>();
    	distances.add(2);
    	distances.add(21);
    	competition1.put("distances", distances);
    	
    	distance1 = new ArrayList<>();
    	distance1.add("Maria Ivanova");
    	distance2 = new ArrayList<>();
    	distance2.add("Joanne White");
    	
    	winners = new Document();
    	winners.put("2", distance1);
    	winners.put("21", distance2);
    	competition1.put("winners", winners);
    	
    	competition1.put("all_competitors_count", 31);
        	
    	
    	mlc.insertDocument(competition1);
    	
    	System.out.println();
    	System.out.println("Documents so far:");
    	List<Document> competitions = mlc.getCollection().find().into(new ArrayList<Document>());
    	for (Document comp : competitions) {
			System.out.println(comp);
		}
    	System.out.println();
	}

	private static void top3InBurgas(MongolabController mlc) {
		Document burgas = new Document();
    	burgas.put("location", "Burgas");
    	
    	Document hide = new Document();
    	hide.put("_id", false);
    	hide.put("distances", false);
    	hide.put("winners", false);
    	hide.put("sponsors", false);
    	
    	Document sort = new Document();
    	sort.put("all_competitors_count", -1);
    	
    	System.out.println("1. Изведете трите състезания с най­много участници, които са били проведени в  Бургас ");
    	List<Document> competitions = mlc.getCollection().find(burgas).projection(hide).sort(sort).limit(3).into(new ArrayList<Document>());
    	for (Document comp : competitions) {
			System.out.println(comp);
		}
    	System.out.println();
	}

	private static void addInfoForMarathonAndPrintResult(MongolabController mlc) {
		Document updateDistance = new Document();
    	updateDistance.put("distances", 42);
    	
    	Document setMarathon = new Document();
    	setMarathon.put("$set", new Document("marathon", true));
    	
    	mlc.getCollection().updateMany(updateDistance, setMarathon);
    	
    	Document hide = new Document();
    	hide.put("_id", false);
    	hide.put("all_competitors_count", false);
    	hide.put("winners", false);
    	hide.put("sponsors", false);
    	
    	System.out.println("2. За всяко състезание, което включва дистанция от 42 км, добавете информация, че състезанието включва маратон ");
    	System.out.println("Documents so far:");
    	List<Document> competitions = mlc.getCollection().find().projection(hide).into(new ArrayList<Document>());
    	for (Document comp : competitions) {
			System.out.println(comp);
		}
    	System.out.println();
	}

	private static void deletePeterAndMariaFor2AndPrintResult(MongolabController mlc) {
		mlc.getCollection().deleteMany(new Document()
				.append("winners.2", new Document()
										.append("$in", new ArrayList<String>(Arrays.asList("Maria Ivanova", "Peter Petrov")))));

		Document hide = new Document();
		hide.put("_id", false);
		hide.put("all_competitors_count", false);
		hide.put("distances", false);
		hide.put("sponsors", false);
		
		System.out.println("3. Изтрийте всички състезания, в които участник на име Peter Petrov или състезател с име Maria Ivanova е спечелил състезанието на 2 км");
		System.out.println("Documents so far:");
		List<Document> competitions = mlc.getCollection().find().projection(hide).into(new ArrayList<Document>());
		for (Document comp : competitions) {
		System.out.println(comp);
		}
		System.out.println();
	}

	private static void addDistanceForSponsorAndPrintResult(MongolabController mlc) {
		mlc.getCollection().updateMany(new Document()
				.append("sponsors", new Document()
									.append("$exists", true)
									.append("$ne", null)), new Document()
															.append("$addToSet", new Document()
																					.append("distances", 5)));
		Document hide = new Document();
		hide.put("_id", false);
		hide.put("location", false);
		hide.put("all_competitors_count", false);
		
		System.out.println("4. Ако за дадено състезание съществува информация, че има спонсор, то добавете дистанцията от 5 км към списъка от разстоянията на състезанието.  ");
		System.out.println("Documents so far:");
		List<Document> competitions = mlc.getCollection().find().projection(hide).into(new ArrayList<Document>());
		for (Document comp : competitions) {
		System.out.println(comp);
		}
		System.out.println();
		
		System.out.println("Done.");
	}
}
