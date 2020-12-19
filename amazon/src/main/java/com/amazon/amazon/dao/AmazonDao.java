package com.amazon.amazon.dao;

import com.amazon.amazon.model.DataResult;

import java.util.List;

public interface AmazonDao {
    public String login(String username, String password);
    public List<DataResult> getData(String searchTerm, String contextDate);

}
