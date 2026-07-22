package org.example.chat.controller;

import lombok.RequiredArgsConstructor;
import org.example.chat.entity.ChatMember;
import org.example.chat.entity.ChatMessage;
import org.example.chat.repository.ChatMessageRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chat")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ChatMessageController {
    private final ChatMessageRepository chatMessageRepository;

    @PostMapping
    public ChatMessage send(@RequestBody ChatMessage chatMessage){
        return chatMessageRepository.save(chatMessage);
    }

    @GetMapping("/{roomId}")
    public List<ChatMessage> getMessages(@PathVariable Long roomId){
        return chatMessageRepository.findByRoomId(roomId);
    }
}
