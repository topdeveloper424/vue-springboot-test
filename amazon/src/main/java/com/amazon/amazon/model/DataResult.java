package com.amazon.amazon.model;

public class DataResult {
    private final String searchTerm;
    private final int rank;
    private final String asin1;
    private final String title1;
    private final Float share1;
    private final Float conv1;
    private final String asin2;
    private final String title2;
    private final Float share2;
    private final Float conv2;
    private final String asin3;
    private final String title3;
    private final Float share3;
    private final Float conv3;
    private final String createdAt;

    public DataResult(String searchTerm, int rank, String asin1, String title1, Float share1, Float conv1, String asin2, String title2, Float share2, Float conv2, String asin3, String title3, Float share3, Float conv3, String createdAt) {
        this.searchTerm = searchTerm;
        this.rank = rank;
        this.asin1 = asin1;
        this.title1 = title1;
        this.share1 = share1;
        this.conv1 = conv1;
        this.asin2 = asin2;
        this.title2 = title2;
        this.share2 = share2;
        this.conv2 = conv2;
        this.asin3 = asin3;
        this.title3 = title3;
        this.share3 = share3;
        this.conv3 = conv3;
        this.createdAt = createdAt;
    }

    public String getSearchTerm() {
        return searchTerm;
    }

    public int getRank() {
        return rank;
    }

    public String getAsin1() {
        return asin1;
    }

    public String getTitle1() {
        return title1;
    }

    public Float getShare1() {
        return share1;
    }

    public Float getConv1() {
        return conv1;
    }

    public String getAsin2() {
        return asin2;
    }

    public String getTitle2() {
        return title2;
    }

    public Float getShare2() {
        return share2;
    }

    public Float getConv2() {
        return conv2;
    }

    public String getAsin3() {
        return asin3;
    }

    public String getTitle3() {
        return title3;
    }

    public Float getShare3() {
        return share3;
    }

    public Float getConv3() {
        return conv3;
    }

    public String getCreatedAt() {
        return createdAt;
    }
}
