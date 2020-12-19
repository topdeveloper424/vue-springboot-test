package com.amazon.amazon.dao;

import com.amazon.amazon.model.DataResult;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("postgres")
public class AamzonDataAccessService implements AmazonDao {
    private final JdbcTemplate jdbcTemplate;

    public AamzonDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public String login(String username, String password){
        if (username.equals("admin") && password.equals("admin")){
            return "success";
        }else{
            return "failed";
        }
    }

    @Override
    public List<DataResult> getData(String searchTerm, String contextDate){
        final String sql = "SELECT * FROM DataResultTable WHERE searchTerm = ? AND contextDate = ?";
        return jdbcTemplate.query(sql,new Object[]{searchTerm, contextDate},(resultSet, i) -> {
            return new DataResult(
                    resultSet.getString("searchTerm"),
                    resultSet.getInt("rank"),
                    resultSet.getString("asin1"),
                    resultSet.getString("title1"),
                    resultSet.getFloat("share1"),
                    resultSet.getFloat("conv1"),
                    resultSet.getString("asin2"),
                    resultSet.getString("title2"),
                    resultSet.getFloat("share2"),
                    resultSet.getFloat("conv2"),
                    resultSet.getString("asin3"),
                    resultSet.getString("title3"),
                    resultSet.getFloat("share3"),
                    resultSet.getFloat("conv3"),
                    resultSet.getString("created_at")
            );
        });


    }

}
