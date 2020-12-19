package com.amazon.amazon.service;

import com.amazon.amazon.dao.AmazonDao;
import com.amazon.amazon.model.DataResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AmazonService {
    private final AmazonDao amazonDao;


    @Autowired
    public AmazonService(@Qualifier("postgres") AmazonDao amazonDao) {
        this.amazonDao = amazonDao;
    }

    public String login(String username, String password){
        return amazonDao.login(username, password);
    }
    public List<DataResult> getData(String username, String password){
        return amazonDao.getData(username, password);
    }

}
