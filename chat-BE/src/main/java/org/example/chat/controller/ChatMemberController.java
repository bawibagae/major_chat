package org.example.chat.controller;

import lombok.RequiredArgsConstructor;
import org.example.chat.entity.ChatMember;
import org.example.chat.repository.ChatMemberRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chat/member")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ChatMemberController {
    private final ChatMemberRepository chatMemberRepository;

    @PostMapping
    public ChatMember send(@RequestBody ChatMember chatMember){
        return chatMemberRepository.save(chatMember);
    }
    @GetMapping
    public List<ChatMember> getMembers(@PathVariable Long roomId){
        return chatMemberRepository.findByChatRoom_Id(roomId);
    }
}
