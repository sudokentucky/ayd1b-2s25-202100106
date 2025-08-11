package com.ayd1b.Tarea1.dto;

public class NameAndAlbum {
    private String name;
    private String album;

    public NameAndAlbum(String name, String album) {
        this.name = name;
        this.album = album;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }
}
