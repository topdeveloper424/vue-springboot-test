package com.amazon.amazon.model;

public class History {
    private final String uploadedTime;
    private final int recordNumber;
    private final String collectionName;

    public History(String uploadedTime, int recordNumber, String collectionName) {
        this.uploadedTime = uploadedTime;
        this.recordNumber = recordNumber;
        this.collectionName = collectionName;
    }

    public String getUploadedTime() {
        return uploadedTime;
    }

    public int getRecordNumber() {
        return recordNumber;
    }

    public String getCollectionName() {
        return collectionName;
    }
}
