package com.ayd1b.Tarea1.controller;

import com.ayd1b.Tarea1.dto.NameAndAlbum;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/music")
public class MusicController {
    
    @GetMapping
    public ResponseEntity<NameAndAlbum> getNameAndAlbum() {
        NameAndAlbum nameAndAlbum = new NameAndAlbum("Keneth", "Astroworld");
        return ResponseEntity.ok(nameAndAlbum);
    }
}
