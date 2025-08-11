package com.ayd1b.Tarea1.dto;

public class NameAndSongDTO {
    private String name;
    private String song;

    public NameAndSongDTO() {
    }

    public NameAndSongDTO(String name, String song) {
        this.name = name;
        this.song = song;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSong() {
        return song;
    }

    public void setSong(String song) {
        this.song = song;
    }
}
