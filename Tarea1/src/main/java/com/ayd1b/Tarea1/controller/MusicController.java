package com.ayd1b.Tarea1.controller;

import com.ayd1b.Tarea1.dto.NameAndSongDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/music")
public class MusicController {
    
    @GetMapping
    public ResponseEntity<NameAndSongDTO> getNameAndSong() {
        NameAndSongDTO nameAndSong = new NameAndSongDTO("Keneth", "The End");
        return ResponseEntity.ok(nameAndSong);
    }
}
