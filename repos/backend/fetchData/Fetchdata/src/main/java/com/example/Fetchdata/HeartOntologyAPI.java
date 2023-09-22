package com.example.Fetchdata;
import org.semanticweb.owlapi.apibinding.OWLManager;
import org.semanticweb.owlapi.model.*;

import java.io.File;

public class HeartOntologyAPI   {
    private OWLOntologyManager OWLMng = OWLManager.createOWLOntologyManager();
    private OWLOntology hop;
    public HeartOntologyAPI(File file) throws OWLOntologyCreationException {
           hop= OWLMng.loadOntologyFromOntologyDocument(file);

    }

    public OWLOntology getOnto(){
        return hop;
    }
}
