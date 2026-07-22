package org.example.chat.service;

import lombok.RequiredArgsConstructor;
import org.example.chat.entity.Member;
import org.example.chat.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public Member save(Member member){
        return memberRepository.save(member);
    }

    public List<Member> findAll(){
        return memberRepository.findAll();
    }

    public void delete(Long id) {
        memberRepository.deleteById(id);
    }

    public Member login(String loginId, Long password){
        return memberRepository.findByLoginIdAndPassword(
                loginId,
                password
        );
    }
    public Member findById(Long id){
        return memberRepository.findById(id).orElse(null);
    }
}
