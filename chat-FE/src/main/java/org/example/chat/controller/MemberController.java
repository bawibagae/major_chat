package org.example.chat.controller;

import lombok.RequiredArgsConstructor;
import org.example.chat.entity.ChatMember;
import org.example.chat.entity.ChatRoom;
import org.example.chat.entity.Member;
import org.example.chat.repository.ChatMemberRepository;
import org.example.chat.repository.ChatRoomRepository;
import org.example.chat.repository.MemberRepository;
import org.example.chat.service.MemberService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {

    private final MemberService memberService;

    @PostMapping
    public Member save(@RequestBody Member member){
        return memberService.save(member);
    }

    @PostMapping("/login")
    public Member login(@RequestBody Member member){
        return memberService.login(
                member.getLoginId(),
                member.getPassword()
        );
    }

    @GetMapping
    public List<Member> findAll(){
        return memberService.findAll();
    }

    @GetMapping("/{id}")
    public Member findById(@PathVariable Long id){
        return memberService.findById(id);
    }


    }
