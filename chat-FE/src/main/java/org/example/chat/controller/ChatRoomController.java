package org.example.chat.controller;

import lombok.RequiredArgsConstructor;
import org.example.chat.entity.ChatMember;
import org.example.chat.entity.ChatRoom;
import org.example.chat.entity.Member;
import org.example.chat.repository.ChatMemberRepository;
import org.example.chat.repository.ChatRoomRepository;
import org.example.chat.repository.MemberRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class ChatRoomController {

    private final ChatRoomRepository chatRoomRepository;
    private final MemberRepository memberRepository;
    private final ChatMemberRepository chatMemberRepository;


    @PostMapping
    public ChatRoom createRoom(@RequestBody ChatRoom chatRoom){
        return chatRoomRepository.save(chatRoom);
    }

    @GetMapping
    public List<ChatRoom> getRooms(){
        return chatRoomRepository.findAll();
    }
    @PostMapping("/join")
    public void joinRoom(@RequestParam Long roomId,
                         @RequestParam Long memberId) {
        if (memberId == null || roomId == null) {
            throw new RuntimeException("roomId or memberId is null");
        }
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new RuntimeException("member 없음"));
        ChatRoom room = chatRoomRepository.findById(roomId)
                .orElseThrow(() -> new RuntimeException("room 없음"));

        boolean exists = chatMemberRepository
                .existsByMember_IdAndChatRoom_Id(memberId, roomId);

        if (!exists) {
            ChatMember chatMember = new ChatMember();
            chatMember.setMember(member);
            chatMember.setChatRoom(room);

            chatMemberRepository.save(chatMember);
        }
    }
    @GetMapping("/joined")
    public boolean isJoined(@RequestParam Long roomId,
                            @RequestParam Long memberId){
        return chatMemberRepository.existsByMember_IdAndChatRoom_Id(memberId, roomId);
    }
}
