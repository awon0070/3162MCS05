import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QueryFactory;
import org.apache.jena.query.QuerySolution;
import org.apache.jena.query.ResultSet;
import org.apache.jena.rdf.model.ModelFactory;

import org.apache.jena.rdf.model.*;
import org.apache.jena.ontology.OntModel;
import org.apache.jena.ontology.OntModelSpec;
import org.apache.jena.vocabulary.RDFS;

import org.apache.jena.util.FileManager;

import java.util.Scanner;


public class main {
    public static void main(String[] args) {

        // Create an ontology model
        OntModel model = ModelFactory.createOntologyModel(OntModelSpec.OWL_DL_MEM);

        // Load the main ontology (which includes imports)
        String ontologyFilePath = "file:///Users/Jia%20Xian%20Wong/Desktop/3162/MAVENJENA/doid(newest).owl";
        model.read(ontologyFilePath);



        //Querying
        //ankyrin-B-related cardiac arrhythmia
        //findSymptoms.main(model);

        //syncope, dyspnea
        findDisease.main(model);

        System.out.println("END");
    }




}



