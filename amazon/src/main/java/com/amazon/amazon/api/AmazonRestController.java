package com.amazon.amazon.api;


import com.amazon.amazon.service.AmazonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

@RestController
public class AmazonRestController {
    private final AmazonService amazonService;

    @Autowired
    public AmazonRestController(AmazonService amazonService) {
        this.amazonService = amazonService;
    }
    @PostMapping("/auth/login")
    public String login(@NonNull @RequestParam("username") String username, @RequestParam("password") String password){
        return amazonService.login(username, password);

    }

    @GetMapping("/data/getData")
    public ResponseEntity<Object> getData(@NonNull @RequestParam("searchTerm") String searchTerm, @RequestParam("contextDate") String contextDate){
        return new ResponseEntity<Object>(amazonService.getData(searchTerm, contextDate), HttpStatus.OK);

    }


}

